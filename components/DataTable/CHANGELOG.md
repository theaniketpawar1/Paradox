# Changelog

All notable changes to the `@paradox/datatable` component.

## [1.0.0] - 2024-03-12

### Added
- Initial production release
- Virtual scrolling with TanStack Virtual
- Full TypeScript support with generics
- Client-side sorting with sort indicators
- Custom cell rendering via `render` prop
- Loading, error, and empty states
- Full WCAG 2.1 AA accessibility
  - ARIA roles (table, row, cell, columnheader)
  - Keyboard navigation (Tab, Enter, Space)
  - Screen reader announcements
  - Focus management
- Sticky header support
- Responsive design with mobile-first approach
- Performance optimizations
  - React.memo
  - useCallback/useMemo
  - Dynamic import support ready
- Comprehensive test suite (>90% coverage)
- Storybook documentation with interactive stories
- Demo application with realistic data
- Complete documentation (README, API reference)
- Package configuration for npm publishing

### Components
- `DataTable` - Main component
- `MemoizedDataTable` - Pre-memoized version
- `createColumn` - Helper for column definitions

### Types
- `Column<T>` - Column configuration interface
- `DataTableProps<T>` - Component props interface

### Documentation
- Full API reference
- Accessibility guidelines
- Performance optimization tips
- Styling recommendations (CSS variables, Tailwind)
- Testing examples
- Migration guide (N/A - first release)

---

## Future Roadmap

- [ ] Column resizing
- [ ] Row selection (single/multi)
- [ ] Column pinning
- [ ] Tree/grouped rows
- [ ] Drag-and-drop reordering
- [ ] Editable cells
- [ ] CSV/Excel export
- [ ] Server-side pagination pattern
- [ ] Server-side sorting integration
- [ ] Column virtualization for 50+ columns
- [ ] RTL language support
- [ ] Dark mode theming

---

**Maintainer:** Bhakti (Frontend Developer, PARADOX)
**Senior Manager:** Maya
**CEO:** Aniket sir