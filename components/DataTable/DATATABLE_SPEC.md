---
title: DataTable Component Specification
status: production-ready
priority: P0
team: Frontend
---

# DataTable Component - Implementation Guide

## 🎯 Overview
High-performance virtualized data table component designed for large datasets with full accessibility compliance and modern React patterns.

## ✅ Success Metrics
- **Performance:** Handles 10,000+ rows with <16ms render time
- **Accessibility:** WCAG 2.1 AA compliant, full keyboard navigation
- **Reusability:** Generic types for any data shape
- **Bundle Impact:** ~15KB gzipped (including @tanstack/react-virtual)

## 🏗️ Architecture

### Component Structure
```
DataTable/
├── DataTable.tsx          (Main component)
├── DataTable.types.ts     (Type definitions)
├── DataTable.test.tsx     (Unit tests)
├── DataTable.stories.tsx  (Component stories)
├── DataTable.css          (Styles - optional utility approach)
└── index.ts               (Public exports)
```

### File Organization
```typescript
// index.ts
export { DataTable, MemoizedDataTable, createColumn } from './DataTable';
export type { DataTableProps, Column } from './DataTable.types';
```

## 🎨 API Reference

### Props Interface

```typescript
interface DataTableProps<T extends Record<string, any>> {
  // Data
  data: T[];
  columns: Column<T>[];
  
  // Callbacks
  onRowClick?: (row: T, index: number) => void;
  onSort?: (column: keyof T, direction: 'asc' | 'desc') => void;
  
  // UI Configuration
  loading?: boolean;
  error?: string | null;
  emptyMessage?: string;
  maxHeight?: string | number; // Default: '400px'
  className?: string;
  ariaLabel?: string;
  
  // Virtualization
  estimatedRowHeight?: number; // Default: 50
  overscan?: number; // Default: 5
  
  // Sorting
  defaultSortColumn?: keyof T;
  defaultSortDirection?: 'asc' | 'desc';
  stickyHeader?: boolean; // Default: true
}
```

### Column Definition

```typescript
interface Column<T = any> {
  key: keyof T | string;
  header: string;
  width?: string | number;
  sortable?: boolean; // Default: false
  align?: 'left' | 'center' | 'right'; // Default: 'left'
  render?: (value: any, row: T, index: number) => React.ReactNode;
  className?: string;
  headerClassName?: string;
}
```

## 📦 Installation

```bash
npm install @tanstack/react-virtual
# or
yarn add @tanstack/react-virtual
```

## 🚀 Usage Examples

### Basic Usage
```tsx
import { DataTable, Column } from '@/components/DataTable';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const columns: Column<User>[] = [
  { key: 'id', header: 'ID', width: '80px' },
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  { key: 'role', header: 'Role' },
];

const users: User[] = [...]; // Your data

export default function UserList() {
  return (
    <DataTable
      data={users}
      columns={columns}
      onRowClick={(user) => console.log('Clicked:', user)}
      maxHeight="600px"
      defaultSortColumn="name"
      defaultSortDirection="asc"
    />
  );
}
```

### Custom Cell Rendering
```tsx
const columns: Column<User>[] = [
  {
    key: 'status',
    header: 'Status',
    render: (value) => (
      <span className={`status-badge status-${value}`}>
        {value}
      </span>
    ),
  },
  {
    key: 'actions',
    header: 'Actions',
    width: '200px',
    render: (_, user) => (
      <div className="action-buttons">
        <button onClick={() => editUser(user.id)}>Edit</button>
        <button onClick={() => deleteUser(user.id)}>Delete</button>
      </div>
    ),
  },
];
```

### Loading & Error States
```tsx
<DataTable
  data={[]}
  columns={columns}
  loading={isFetching}
  error={error?.message || null}
  emptyMessage="No users found"
/>
```

## ♿ Accessibility Features

### Built-in ARIA support
- `role="table"` on container
- `role="rowgroup"` for header/body/footer
- `role="row"` for each row
- `role="columnheader"` for headers
- `role="cell"` for data cells
- `aria-label` for table identification
- `aria-sort` for sort state
- `aria-rowindex` for row positioning
- `aria-live` regions for loading/error states

### Keyboard Navigation
- **Tab:** Focus enters table (first focusable row if onRowClick defined)
- **Enter/Space:** Activates row click handler
- **Arrow keys:** Navigate between rows (requires custom implementation)
- **Escape:** Exits table focus

### Focus Management
- Rows have `tabIndex={0}` when interactive
- Non-interactive rows have `tabIndex={-1}`
- Clear focus indicators with CSS

## ⚡ Performance Optimizations

### Virtualization
- Only renders visible rows + overscan buffer
- Dynamic row height measurement
- Optimized scroll handling with requestAnimationFrame

### React Optimizations
- `React.memo` for component memoization
- `useCallback` for event handlers
- `useMemo` for computed data (sorting, rendering)
- Proper generic typing avoids re-renders

### Bundle Size
- Tree-shakable exports
- Minimal dependencies (only @tanstack/react-virtual)
- Optional CSS approach (utility-first or custom)

## 🧪 Testing Strategy

### Unit Tests Coverage
```typescript
// DataTable.test.tsx
describe('DataTable', () => {
  it('renders without crashing', () => {
    render(<DataTable data={[]} columns={[]} />);
  });

  it('displays loading state', () => {
    render(<DataTable data={[]} columns={[]} loading={true} />);
    expect(screen.getByText('Loading data...')).toBeInTheDocument();
  });

  it('displays error state', () => {
    render(<DataTable data={[]} columns={[]} error="Failed to load" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Failed to load');
  });

  it('handles row clicks', () => {
    const onClick = jest.fn();
    const data = [{ id: 1, name: 'Test' }];
    const columns = [{ key: 'name', header: 'Name' }];
    
    render(
      <DataTable data={data} columns={columns} onRowClick={onClick} />
    );
    
    fireEvent.click(screen.getByRole('row'));
    expect(onClick).toHaveBeenCalledWith(data[0], 0);
  });

  it('supports sorting', () => {
    const data = [
      { id: 2, name: 'Zoe' },
      { id: 1, name: 'Alice' },
    ];
    const columns = [
      { key: 'name', header: 'Name', sortable: true },
    ];
    
    render(<DataTable data={data} columns={columns} />);
    fireEvent.click(screen.getByText('Name'));
    
    // Check sort indicator
    expect(screen.getByText('Name')).toHaveTextContent('↑');
  });

  it('is accessible via keyboard', () => {
    const onClick = jest.fn();
    const data = [{ id: 1, name: 'Test' }];
    const columns = [{ key: 'name', header: 'Name' }];
    
    render(
      <DataTable data={data} columns={columns} onRowClick={onClick} />
    );
    
    const row = screen.getByRole('row');
    row.focus();
    fireEvent.keyDown(row, { key: 'Enter' });
    
    expect(onClick).toHaveBeenCalled();
  });

  it('virtualizes large datasets', () => {
    const largeData = Array.from({ length: 10000 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
    }));
    const columns = [
      { key: 'id', header: 'ID' },
      { key: 'name', header: 'Name' },
    ];
    
    render(
      <DataTable 
        data={largeData} 
        columns={columns} 
        maxHeight="400px" 
      />
    );
    
    // Should only render visible rows (approx 10-15)
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBeLessThan(20);
  });
});
```

### Accessibility Testing
```bash
# Run axe-core
npx jest --testNamePattern=a11y

# Or with pa11y
npx pa11y-ci --sitemap http://localhost:3000
```

### Performance Testing
```typescript
// Using React Profiler
import { Profiler } from 'react';

const onRender = (id, phase, actualDuration) => {
  console.log(`${id} ${phase} took ${actualDuration}ms`);
};

<Profiler id="DataTable" onRender={onRender}>
  <DataTable data={largeDataset} columns={columns} />
</Profiler>
```

## 🎨 Styling Recommendations

### Utility-First (Tailwind CSS)
```css
/* Add to your global styles if using custom CSS */
.data-table-container {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

.data-table-row:focus {
  outline: 2px solid #3b82f6;
  outline-offset: -2px;
}

.data-table-row:hover {
  background-color: #f9fafb;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  padding: 40px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #e5e7eb;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

## 🔧 Advanced Configuration

### Custom Row Height Measurement
```tsx
<DataTable
  data={data}
  columns={columns}
  estimatedRowHeight={50} // Initial estimate
  // Component will auto-measure actual heights
/>
```

### Dynamic Column Widths
```tsx
const columns: Column[] = [
  { key: 'id', header: 'ID', width: '80px' },
  { key: 'longText', header: 'Description' }, // flex: 1 (takes remaining space)
];
```

### Controlled Sorting
```tsx
const [sortConfig, setSortConfig] = useState<{column: keyof User; direction: 'asc' | 'desc'} | null>(null);

<DataTable
  data={users}
  columns={columns}
  defaultSortColumn="name"
  onSort={(column, direction) => {
    setSortConfig({ column, direction });
    // Fetch sorted data from server if needed
  }}
/>
```

## 🐛 Known Limitations & Solutions

| Limitation | Solution |
|------------|----------|
| Column resizing not built-in | Wrap in resize handler component |
| Row selection checkboxes not included | Add custom column with checkbox render |
| Server-side sorting/pagination | Controlled mode with external data fetching |
| Fixed headers with column alignment | Use sticky positioning (already supported) |
| Nested tables | Use separate component or custom cell renderer |

## 📈 Performance Tips

1. **Use `estimatedRowHeight`** - Better initial estimate = less layout shift
2. **Limit `overscan`** - 5 is good balance; lower = less DOM, higher = smoother scroll
3. **Memoize columns** - If columns array is recreated on every render
4. **Virtualize parent containers** - If table is inside another scrollable container
5. **Use `MemoizedDataTable`** - For static data that doesn't change frequently

## 📚 Related Components
- `DataGrid` - Full-featured grid with editing capabilities
- `CardList` - Non-tabular data display
- `FilterBar` - Column filtering integration
- `Paginator` - Server-side pagination controls

## 🔄 Version History
- **v1.0.0** (2024-03-12): Initial production release
  - Virtual scrolling with TanStack Virtual
  - Full TypeScript support
  - WCAG 2.1 AA accessibility
  - Sorting, loading, error states
  - Custom cell rendering

## 📞 Contact
For questions or enhancements, contact:
- **Frontend Team:** PARADOX
- **Senior Manager:** Maya
- **CEO:** Aniket sir

---
Last Updated: 2024-03-12
Owner: Bhakti (Frontend Developer)
Status: Production Ready ✅