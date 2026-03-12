import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DataTable, Column, DataTableProps } from './index';

// ============================================
// Meta Configuration
// ============================================

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
High-performance virtualized data table with full accessibility support.
Designed for large datasets with sorting, custom rendering, and all Core Web Vitals optimizations.

**Features:**
- Virtual scrolling for 10,000+ rows
- Full WCAG 2.1 AA compliance
- Sorting (client-side)
- Custom cell renderers
- Loading/error/empty states
- TypeScript generics
- Mobile responsive
- Sticky headers
        `,
      },
    },
  },
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    maxHeight: {
      control: 'text',
      description: 'Maximum height of table',
      defaultValue: '400px',
    },
    'defaultSortColumn': {
      control: 'text',
      description: 'Initial sort column key',
    },
    'defaultSortDirection': {
      control: {
        type: 'select',
        options: ['asc', 'desc'],
      },
      description: 'Initial sort direction',
    },
    stickyHeader: {
      control: 'boolean',
      description: 'Keep header fixed while scrolling',
      defaultValue: true,
    },
  },
};

export default meta;

type Story<T> = StoryObj<typeof DataTable<T>>;

// ============================================
// Test Data Types
// ============================================

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
  lastLogin: string;
}

const generateMockUsers = (count: number): User[] => {
  const roles = ['Admin', 'User', 'Moderator', 'Developer', 'Designer'];
  const statuses: ('active' | 'inactive')[] = ['active', 'inactive'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: roles[i % roles.length],
    status: statuses[i % 2],
    joinDate: new Date(2024, i % 12, (i % 28) + 1).toLocaleDateString(),
    lastLogin: new Date().toLocaleDateString(),
  }));
};

const userColumns: Column<User>[] = [
  { key: 'id', header: 'ID', width: '80px' },
  { 
    key: 'name', 
    header: 'Name', 
    sortable: true,
    className: 'user-name-cell',
  },
  { 
    key: 'email', 
    header: 'Email', 
    sortable: true,
    render: (value) => (
      <a href={`mailto:${value}`} className="email-link">
        {value}
      </a>
    ),
  },
  { key: 'role', header: 'Role' },
  {
    key: 'status',
    header: 'Status',
    render: (value) => (
      <span className={`status-badge status-${value}`}>
        {value}
      </span>
    ),
  },
  { key: 'joinDate', header: 'Join Date' },
  { key: 'lastLogin', header: 'Last Login' },
];

// ============================================
// Stories
// ============================================

export const Basic: Story<User> = {
  args: {
    data: generateMockUsers(10),
    columns: userColumns,
    maxHeight: '500px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic usage with static data. Demonstrates core functionality with sorting enabled on Name and Email columns.',
      },
    },
  },
};

export const WithCustomRendering: Story<User> = {
  args: {
    data: generateMockUsers(5),
    columns: [
      ...userColumns.slice(0, 4),
      {
        key: 'actions',
        header: 'Actions',
        width: '200px',
        render: (_, user) => (
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              className="action-btn edit"
              onClick={(e) => {
                e.stopPropagation();
                alert(`Edit ${user.name}`);
              }}
            >
              Edit
            </button>
            <button 
              className="action-btn delete"
              onClick={(e) => {
                e.stopPropagation();
                alert(`Delete ${user.name}`);
              }}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    maxHeight: '500px',
    onRowClick: (user) => {
      console.log('Row clicked:', user);
      alert(`Selected: ${user.name} (${user.email})`);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates custom cell rendering with action buttons, email links, and status badges with interactive row selection.',
      },
    },
  },
};

export const WithLargeDataset: Story<User> = {
  args: {
    data: generateMockUsers(10000),
    columns: userColumns.slice(0, 5), // Fewer columns for performance demo
    maxHeight: '600px',
    estimatedRowHeight: 50,
    overscan: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Performance test with 10,000 rows. Demonstrates virtual scrolling - only visible rows are rendered in the DOM.',
      },
    },
  },
};

export const LoadingState: Story<User> = {
  args: {
    data: [],
    columns: userColumns,
    loading: true,
    maxHeight: '500px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state with spinner and status message. Uses aria-live="polite" for screen reader announcement.',
      },
    },
  },
};

export const ErrorState: Story<User> = {
  args: {
    data: [],
    columns: userColumns,
    error: 'Failed to fetch user data. Please try again.',
    maxHeight: '500px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state with alert role and aria-live="assertive" for immediate screen reader notification.',
      },
    },
  },
};

export const EmptyState: Story<User> = {
  args: {
    data: [],
    columns: userColumns,
    emptyMessage: 'No users found. Create your first user to get started.',
    maxHeight: '500px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state with custom message when data array is empty.',
      },
    },
  },
};

export const ControlledSorting: Story<User> = {
  render: (args) => {
    const [sortConfig, setSortConfig] = useState<{column: keyof User; direction: 'asc' | 'desc'} | null>(null);
    
    return (
      <div>
        <div style={{ marginBottom: '16px', padding: '12px', background: '#f3f4f6', borderRadius: '8px' }}>
          <strong>Current Sort:</strong> {sortConfig 
            ? `${String(sortConfig.column)} (${sortConfig.direction})`
            : 'None'
          }
        </div>
        <DataTable<User>
          {...args}
          onSort={(column, direction) => {
            setSortConfig({ column, direction });
          }}
        />
      </div>
    );
  },
  args: {
    data: generateMockUsers(20),
    columns: userColumns,
    maxHeight: '500px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled sorting example where sort state is managed externally. Useful for server-side sorting integration.',
      },
    },
  },
};

export const NonInteractive: Story<User> = {
  args: {
    data: generateMockUsers(10),
    columns: userColumns,
    maxHeight: '500px',
    onRowClick: undefined, // Explicitly no row clicks
  },
  parameters: {
    docs: {
      description: {
        story: 'Display-only table without row interactions. Rows have tabIndex=-1 and no pointer cursor.',
      },
    },
  },
};

export const CustomStyling: Story<User> = {
  args: {
    data: generateMockUsers(8),
    columns: userColumns,
    maxHeight: '500px',
    className: 'custom-styled-table',
  },
  parameters: {
    docs: {
      description: {
        story: 'Apply custom CSS classes for theming. Add custom styles via className prop on DataTable or individual columns.',
      },
    },
  },
  decorators: [
    (Story) => (
      <style>{`
        .custom-styled-table .data-table-header-cell {
          background-color: #1e40af !important;
          color: white !important;
          font-weight: 700 !important;
        }
        .custom-styled-table .data-table-row:hover {
          background-color: #eff6ff !important;
        }
        .custom-styled-table .status-badge {
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }
        .custom-styled-table .status-active {
          background-color: #dcfce7;
          color: #166534;
        }
        .custom-styled-table .status-inactive {
          background-color: #fee2e2;
          color: #991b1b;
        }
      `}</style>
      <Story />
    ),
  ],
};

// ============================================
// Canvas Story for Visual Testing
// ============================================

export const Playground: Story<User> = {
  args: {
    data: generateMockUsers(50),
    columns: userColumns,
    maxHeight: '500px',
    stickyHeader: true,
    defaultSortColumn: 'name',
    defaultSortDirection: 'asc',
    onRowClick: (user) => console.log('Clicked:', user),
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground. Try sorting by clicking headers, scrolling through 50 rows, clicking rows to see console logs.',
      },
    },
  },
};