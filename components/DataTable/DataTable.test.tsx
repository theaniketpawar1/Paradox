import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DataTable, Column } from './index';
import { UserEvent } from '@testing-library/react';

// Test data
interface TestUser {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const mockUsers: TestUser[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'inactive' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'active' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Moderator', status: 'active' },
];

const mockColumns: Column<TestUser>[] = [
  { key: 'id', header: 'ID', width: '80px' },
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
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
];

// Helper to set up component
function renderDataTable(props: Partial<React.ComponentProps<typeof DataTable<TestUser>>> = {}) {
  return render(
    <DataTable<TestUser>
      data={mockUsers}
      columns={mockColumns}
      {...props}
    />
  );
}

describe('DataTable Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders without crashing', () => {
      renderDataTable();
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('displays all columns in header', () => {
      renderDataTable();
      
      mockColumns.forEach(column => {
        expect(screen.getByText(column.header)).toBeInTheDocument();
      });
    });

    it('renders all data rows', () => {
      renderDataTable();
      
      const rows = screen.getAllByRole('row');
      // Header + data rows (4 users) + footer = 6 rows expected
      expect(rows.length).toBeGreaterThanOrEqual(mockUsers.length);
    });

    it('displays cell values correctly', () => {
      renderDataTable();
      
      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
      expect(screen.getByText('alice@example.com')).toBeInTheDocument();
      expect(screen.getByText('Admin')).toBeInTheDocument();
    });

    it('renders custom cell content when render function provided', () => {
      renderDataTable();
      
      const statusBadges = screen.getAllByText(/active|inactive/);
      expect(statusBadges.length).toBe(mockUsers.length);
    });
  });

  describe('Loading State', () => {
    it('shows loading spinner when loading is true', () => {
      renderDataTable({ loading: true });
      
      expect(screen.getByText('Loading data...')).toBeInTheDocument();
      expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'polite');
    });

    it('does not show data when loading', () => {
      renderDataTable({ loading: true });
      
      expect(screen.queryByText('Alice Johnson')).not.toBeInTheDocument();
    });
  });

  describe('Error State', () => {
    it('displays error message when error prop provided', () => {
      const errorMessage = 'Failed to fetch data';
      renderDataTable({ error: errorMessage });
      
      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    it('does not show data when error', () => {
      renderDataTable({ error: 'Something went wrong' });
      
      expect(screen.queryByText('Alice Johnson')).not.toBeInTheDocument();
    });
  });

  describe('Empty State', () => {
    it('shows empty message when data is empty', () => {
      renderDataTable({ data: [] });
      
      expect(screen.getByText('No data available')).toBeInTheDocument();
    });

    it('displays custom empty message', () => {
      renderDataTable({ data: [], emptyMessage: 'No users found' });
      
      expect(screen.getByText('No users found')).toBeInTheDocument();
    });
  });

  describe('Row Interaction', () => {
    it('calls onRowClick when row is clicked', () => {
      const onRowClick = jest.fn();
      renderDataTable({ onRowClick });
      
      const firstRow = screen.getAllByRole('row')[1]; // Skip header
      fireEvent.click(firstRow);
      
      expect(onRowClick).toHaveBeenCalledWith(mockUsers[0], 0);
    });

    it('calls onRowClick on Enter key', () => {
      const onRowClick = jest.fn();
      renderDataTable({ onRowClick });
      
      const firstRow = screen.getAllByRole('row')[1];
      fireEvent.keyDown(firstRow, { key: 'Enter' });
      
      expect(onRowClick).toHaveBeenCalledWith(mockUsers[0], 0);
    });

    it('calls onRowClick on Space key', () => {
      const onRowClick = jest.fn();
      renderDataTable({ onRowClick });
      
      const firstRow = screen.getAllByRole('row')[1];
      fireEvent.keyDown(firstRow, { key: ' ' });
      
      expect(onRowClick).toHaveBeenCalledWith(mockUsers[0], 0);
    });

    it('rows have tabIndex 0 when onRowClick is provided', () => {
      renderDataTable({ onRowClick: jest.fn() });
      
      const rows = screen.getAllByRole('row');
      // Skip header row (index 0)
      for (let i = 1; i < rows.length - 1; i++) { // Skip footer too
        expect(rows[i]).toHaveAttribute('tabIndex', '0');
      }
    });

    it('rows have tabIndex -1 when onRowClick is not provided', () => {
      renderDataTable();
      
      const rows = screen.getAllByRole('row');
      // Skip header row
      for (let i = 1; i < rows.length - 1; i++) {
        expect(rows[i]).toHaveAttribute('tabIndex', '-1');
      }
    });
  });

  describe('Sorting', () => {
    it('enables sort when column.sortable is true', () => {
      renderDataTable();
      
      const nameHeader = screen.getByText('Name');
      expect(nameHeader).toHaveAttribute('tabIndex', '0');
      expect(nameHeader).toHaveStyle({ cursor: 'pointer' });
    });

    it('sorts data when sortable column header is clicked', () => {
      renderDataTable({ defaultSortColumn: 'name', defaultSortDirection: 'asc' });
      
      const nameHeader = screen.getByText('Name');
      fireEvent.click(nameHeader);
      
      // Check sort indicator
      expect(nameHeader).toHaveTextContent('Name ▼');
    });

    it('toggles sort direction on repeated clicks', () => {
      renderDataTable({ defaultSortColumn: 'name' });
      
      const nameHeader = screen.getByText('Name');
      
      // First click -> desc
      fireEvent.click(nameHeader);
      expect(nameHeader).toHaveTextContent('Name ▼');
      
      // Second click -> asc
      fireEvent.click(nameHeader);
      expect(nameHeader).toHaveTextContent('Name ▲');
    });

    it('calls onSort callback when sorting', () => {
      const onSort = jest.fn();
      renderDataTable({ onSort });
      
      const emailHeader = screen.getByText('Email');
      fireEvent.click(emailHeader);
      
      expect(onSort).toHaveBeenCalledWith('email', 'asc');
    });

    it('supports keyboard sorting', () => {
      const onSort = jest.fn();
      renderDataTable({ onSort });
      
      const nameHeader = screen.getByText('Name');
      fireEvent.keyDown(nameHeader, { key: 'Enter' });
      
      expect(onSort).toHaveBeenCalledWith('name', 'asc');
    });

    it('shows current sort state in footer', () => {
      renderDataTable({ defaultSortColumn: 'name', defaultSortDirection: 'asc' });
      
      expect(screen.getByText(/Sorted by name \(asc\)/)).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA role on container', () => {
      renderDataTable();
      
      expect(screen.getByRole('region')).toHaveAttribute('aria-label', 'Data table');
    });

    it('has role="row" for each data row', () => {
      renderDataTable();
      
      const rows = screen.getAllByRole('row');
      expect(rows.length).toBeGreaterThan(0);
    });

    it('has role="columnheader" for headers', () => {
      renderDataTable();
      
      const headers = screen.getAllByRole('columnheader');
      expect(headers).toHaveLength(mockColumns.length);
    });

    it('has role="cell" for data cells', () => {
      renderDataTable();
      
      const cells = screen.getAllByRole('cell');
      expect(cells.length).toBe(mockUsers.length * mockColumns.length);
    });

    it('announces loading state with aria-live', () => {
      renderDataTable({ loading: true });
      
      expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'polite');
    });

    it('announces errors with aria-live="assertive"', () => {
      renderDataTable({ error: 'Error message' });
      
      expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'assertive');
    });

    it('has aria-sort indicators on sortable columns', () => {
      renderDataTable({ defaultSortColumn: 'name' });
      
      const nameHeader = screen.getByText('Name');
      expect(nameHeader).toHaveAttribute('aria-sort', 'ascending');
      
      const emailHeader = screen.getByText('Email');
      expect(emailHeader).toHaveAttribute('aria-sort', 'none');
    });
  });

  describe('Virtualization', () => {
    it('renders only visible rows for large datasets', () => {
      const largeData = Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        name: `User ${i}`,
        email: `user${i}@example.com`,
        role: 'User',
        status: 'active' as const,
      }));
      
      renderDataTable({ data: largeData, maxHeight: '400px' });
      
      const rows = screen.getAllByRole('row');
      // Should render only visible rows + header + footer, not all 1000 rows
      expect(rows.length).toBeLessThan(50);
    });
  });

  describe('Customization', () => {
    it('applies custom ariaLabel', () => {
      renderDataTable({ ariaLabel: 'User management table' });
      
      expect(screen.getByRole('region')).toHaveAttribute('aria-label', 'User management table');
    });

    it('applies custom empty message', () => {
      renderDataTable({ data: [], emptyMessage: 'Custom empty' });
      
      expect(screen.getByText('Custom empty')).toBeInTheDocument();
    });

    it('applies sticky header when enabled', () => {
      renderDataTable({ stickyHeader: true });
      
      const header = document.querySelector('.data-table-header');
      expect(header).toHaveStyle({ position: 'sticky' });
    });

    it('does not apply sticky header when disabled', () => {
      renderDataTable({ stickyHeader: false });
      
      const header = document.querySelector('.data-table-header');
      expect(header).toHaveStyle({ position: 'relative' });
    });

    it('respects custom maxHeight', () => {
      renderDataTable({ maxHeight: '500px' });
      
      const container = screen.getByRole('region');
      expect(container).toHaveStyle({ maxHeight: '500px' });
    });

    it('applies custom className', () => {
      renderDataTable({ className: 'custom-class' });
      
      expect(document.querySelector('.custom-class')).toBeInTheDocument();
    });
  });

  describe('Footer Information', () => {
    it('shows correct row count', () => {
      renderDataTable();
      
      expect(screen.getByText(`Showing ${mockUsers.length} of ${mockUsers.length} rows`)).toBeInTheDocument();
    });

    it('shows sort status in footer', () => {
      renderDataTable({ defaultSortColumn: 'email' });
      
      expect(screen.getByText(/Sorted by email \(asc\)/)).toBeInTheDocument();
    });

    it('does not show sort status when not sorted', () => {
      renderDataTable();
      
      expect(screen.queryByText(/Sorted by/)).not.toBeInTheDocument();
    });
  });
});

// Integration test example
describe('DataTable Integration Tests', () => {
  it('handles complete user workflow: sort, click, navigate', () => {
    const onRowClick = jest.fn();
    const onSort = jest.fn();
    
    renderDataTable({ onRowClick, onSort });
    
    // 1. Sort by name
    const nameHeader = screen.getByText('Name');
    fireEvent.click(nameHeader);
    expect(onSort).toHaveBeenCalledWith('name', 'asc');
    
    // 2. Click first data row
    const rows = screen.getAllByRole('row');
    const firstDataRow = rows[1];
    fireEvent.click(firstDataRow);
    expect(onRowClick).toHaveBeenCalledWith(mockUsers[0], 0);
    
    // 3. Use keyboard navigation
    firstDataRow.focus();
    fireEvent.keyDown(firstDataRow, { key: 'Enter' });
    expect(onRowClick).toHaveBeenCalledTimes(2);
  });

  it('maintains performance with 5000 rows', () => {
    const largeData = Array.from({ length: 5000 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
      email: `item${i}@example.com`,
      role: 'User',
      status: 'active' as const,
    }));
    
    const { container } = renderDataTable({ 
      data: largeData, 
      maxHeight: '600px' 
    });
    
    // Measure render time (basic check)
    const startTime = performance.now();
    
    // Force re-render
    const { rerender } = render(
      <DataTable<TestUser>
        data={largeData}
        columns={mockColumns}
        maxHeight="600px"
      />
    );
    
    const endTime = performance.now();
    expect(endTime - startTime).toBeLessThan(100); // Should be fast
  });
});