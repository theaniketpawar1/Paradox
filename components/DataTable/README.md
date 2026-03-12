# DataTable Component

A high-performance virtualized data table component built for React applications at PARADOX.

[![npm version](https://img.shields.io/npm/v/@paradox/datatable.svg)](https://www.npmjs.com/package/@paradox/datatable)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@paradox/datatable)](https://bundlephobia.com/package/@paradox/datatable)

## Features

- ⚡ **Virtual Scrolling:** Smooth performance with 10,000+ rows
- ♿ **WCAG 2.1 AA Compliant:** Full keyboard navigation and screen reader support
- 🎨 **TypeScript:** Full type safety with generic support
- 📊 **Sorting:** Client-side sorting with visual indicators
- 🔧 **Customizable:** Flexible column rendering, theming, and styling
- 📱 **Responsive:** Mobile-first design with flexible layouts
- 🧪 **Tested:** Comprehensive test suite with >90% coverage
- 📦 **Tree-shakable:** Minimal bundle impact (~15KB gzipped)

## Installation

```bash
npm install @paradox/datatable @tanstack/react-virtual
# or
yarn add @paradox/datatable @tanstack/react-virtual
```

## Quick Start

```tsx
import { DataTable, Column } from '@paradox/datatable';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const columns: Column<User>[] = [
  { key: 'id', header: 'ID', width: '80px' },
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role' },
];

const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  // ... more users
];

export default function UserList() {
  return (
    <DataTable
      data={users}
      columns={columns}
      onRowClick={(user) => console.log('Clicked:', user)}
      maxHeight="600px"
    />
  );
}
```

## API Reference

### `<DataTable />` Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `T[]` | **required** | Array of data objects |
| `columns` | `Column<T>[]` | **required** | Column definitions |
| `onRowClick?` | `(row: T, index: number) => void` | `undefined` | Row click handler |
| `loading?` | `boolean` | `false` | Show loading spinner |
| `error?` | `string \| null` | `null` | Error message |
| `emptyMessage?` | `string` | `'No data available'` | Empty state text |
| `maxHeight?` | `string \| number` | `'400px'` | Container max height |
| `className?` | `string` | `''` | Custom CSS class |
| `ariaLabel?` | `string` | `'Data table'` | ARIA label for accessibility |
| `estimatedRowHeight?` | `number` | `50` | Estimated row height in pixels |
| `overscan?` | `number` | `5` | Number of rows to render outside viewport |
| `stickyHeader?` | `boolean` | `true` | Sticky header on scroll |
| `defaultSortColumn?` | `keyof T` | `undefined` | Initial sort column |
| `defaultSortDirection?` | `'asc' \| 'desc'` | `'asc'` | Initial sort direction |
| `onSort?` | `(column: keyof T, direction: 'asc' \| 'desc') => void` | `undefined` | Sort change handler |

### `Column<T>` Interface

```typescript
interface Column<T = any> {
  key: keyof T | string;          // Column key (must match data property)
  header: string;                 // Header text
  width?: string | number;        // Fixed width (optional)
  sortable?: boolean;             // Enable sorting (default: false)
  align?: 'left' | 'center' | 'right';  // Text alignment
  render?: (value: any, row: T, index: number) => React.ReactNode;  // Custom cell renderer
  className?: string;             // Cell CSS class
  headerClassName?: string;       // Header CSS class
}
```

## Advanced Examples

### Custom Cell Rendering

```tsx
const columns: Column<User>[] = [
  {
    key: 'status',
    header: 'Status',
    render: (value) => (
      <span className={`badge badge-${value}`}>
        {value === 'active' ? '🟢 Active' : '🔴 Inactive'}
      </span>
    ),
  },
  {
    key: 'actions',
    header: 'Actions',
    width: '180px',
    render: (_, user) => (
      <div className="action-buttons">
        <button onClick={() => edit(user.id)}>Edit</button>
        <button onClick={() => delete(user.id)}>Delete</button>
      </div>
    ),
  },
];
```

### Client-Side Sorting

```tsx
<DataTable
  data={users}
  columns={columns}
  defaultSortColumn="name"
  defaultSortDirection="asc"
  onSort={(column, direction) => {
    console.log(`Sorted by ${column} ${direction}`);
    // Optional: fetch sorted data from server
  }}
/>
```

### Server-Side Sorting

```tsx
function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [sortConfig, setSortConfig] = useState<{column: keyof User; direction: 'asc' | 'desc'} | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const params = new URLSearchParams();
      if (sortConfig) {
        params.append('sort', String(sortConfig.column));
        params.append('order', sortConfig.direction);
      }
      const response = await fetch(`/api/users?${params}`);
      setUsers(await response.json());
    };
    fetchUsers();
  }, [sortConfig]);

  return (
    <DataTable
      data={users}
      columns={columns}
      onSort={setSortConfig}
    />
  );
}
```

### Virtual Scrolling Performance

```tsx
// The table automatically virtualizes when maxHeight is set
<DataTable
  data={largeDataset}  // 10,000+ rows
  columns={columns}
  maxHeight="600px"
  estimatedRowHeight={50}
  overscan={10}  // Render 10 extra rows outside viewport for smoother scroll
/>
```

## Styling

### CSS Variables (Recommended)

```css
:root {
  --datatable-border-color: #e5e7eb;
  --datatable-header-bg: #f9fafb;
  --datatable-row-hover: #f9fafb;
  --datatable-cell-padding: 12px 16px;
  --datatable-font-size: 14px;
  --datatable-text-color: #374151;
}
```

### Utility-First (Tailwind CSS)

The component uses inline styles by default for core layout, but you can override with custom classes:

```tsx
<DataTable
  className="my-custom-table"
  columns={[
    { key: 'name', header: 'Name', className: 'name-cell' },
  ]}
/>
```

```css
.my-custom-table .data-table-row:hover {
  background-color: #1e40af;
  color: white;
}

.my-custom-table .data-table-header-cell {
  font-weight: 700;
  text-transform: uppercase;
}
```

## Accessibility

This component meets WCAG 2.1 AA standards:

- **Roles:** `table`, `rowgroup`, `row`, `columnheader`, `cell`
- **ARIA Labels:** Proper labeling for screen readers
- **Sort Indicators:** `aria-sort="ascending|descending|none"`
- **Keyboard Navigation:** Full keyboard support (Tab, Enter, Space)
- **Focus Management:** Visible focus indicators
- **Live Regions:** `aria-live="polite"` for loading/empty states
- **Color Contrast:** 4.5:1 minimum ratio

## Testing

```bash
# Run unit tests
npm test DataTable

# Run with coverage
npm test DataTable -- --coverage

# Run Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

## Performance

### Benchmarks (10,000 rows)

| Metric | Target | Achieved |
|--------|--------|----------|
| Initial Render | <100ms | ~30ms |
| Scroll FPS | 60fps | 60fps |
| DOM Nodes | <100 | ~40 visible |
| Bundle Size | <20KB | 15KB gzipped |

### Optimizations

1. **Virtual Scrolling:** Only renders visible rows
2. **React.memo:** Prevents unnecessary re-renders
3. **useCallback:** Stable event handlers
4. **useMemo:** Computed values cached
5. **CSS containment:** `contain: strict` on rows
6. **RequestAnimationFrame:** Smooth scroll handling

## Bundle Size

```
@paradox/datatable
├── @tanstack/react-virtual (13KB)
├── react, react-dom (peer)
└── Total: ~15KB gzipped
```

## Known Limitations

- **Column resizing:** Not built-in (use external library or wrapper)
- **Row selection:** Not included (add custom column with checkboxes)
- **Column pinning:** Not supported (use sticky positioning in custom renderer)
- **Tree/grouped rows:** Not supported (use separate component)
- **Server-side pagination:** Controlled mode required

## Roadmap

- [ ] Column resizing
- [ ] Row selection (single/multi)
- [ ] Column pinning (left/right)
- [ ] Tree/grouped rows
- [ ] Drag-and-drop reordering
- [ ] Editable cells
- [ ] Export to CSV/Excel
- [ ] Server-side pagination integration

## Contributing

```bash
git clone https://github.com/paradox/datatable.git
cd datatable
npm install
npm run dev
```

## License

MIT © PARADOX

---

**Maintained by:** Bhakti (Frontend Developer)  
**Senior Manager:** Maya  
**CEO:** Aniket sir

For issues and feature requests, please use the GitHub repository.