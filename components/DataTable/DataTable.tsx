import React, { memo, useCallback, useMemo, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

// ============================================
// Type Definitions
// ============================================

/**
 * Column configuration for DataTable
 */
export interface Column<T = any> {
  /** Unique key for the column (must exist in data type) */
  key: keyof T | string;
  /** Header text displayed in column header */
  header: string;
  /** Optional fixed width (e.g., '100px', 100) */
  width?: string | number;
  /** Enable sorting for this column */
  sortable?: boolean;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Custom render function for cell content */
  render?: (value: any, row: T, index: number) => React.ReactNode;
  /** Additional CSS class for cells */
  className?: string;
  /** Additional CSS class for header */
  headerClassName?: string;
}

/**
 * Props for DataTable component
 */
export interface DataTableProps<T extends Record<string, any>> {
  // ============ Data ============
  /** Array of data objects to display */
  data: T[];
  /** Column definitions */
  columns: Column<T>[];

  // ============ Callbacks ============
  /** Row click handler */
  onRowClick?: (row: T, index: number) => void;
  /** Sort change handler (for controlled sorting) */
  onSort?: (column: keyof T, direction: 'asc' | 'desc') => void;

  // ============ UI States ============
  /** Show loading spinner */
  loading?: boolean;
  /** Error message to display */
  error?: string | null;
  /** Custom empty state message */
  emptyMessage?: string;
  /** Maximum height of table container */
  maxHeight?: string | number;
  /** Additional CSS class */
  className?: string;
  /** ARIA label for accessibility */
  ariaLabel?: string;

  // ============ Virtualization ============
  /** Estimated height of each row in pixels */
  estimatedRowHeight?: number;
  /** Number of rows to render outside viewport */
  overscan?: number;

  // ============ Sorting ============
  /** Default sort column */
  defaultSortColumn?: keyof T;
  /** Default sort direction */
  defaultSortDirection?: 'asc' | 'desc';
  /** Enable sticky header */
  stickyHeader?: boolean;
}

// ============================================
// Helper Types
// ============================================

type SortDirection = 'asc' | 'desc';

interface SortState<T> {
  column: keyof T | null;
  direction: SortDirection;
}

// ============================================
// Main Component
// ============================================

function DataTableInner<T extends Record<string, any>>({
  data,
  columns,
  onRowClick,
  loading = false,
  error = null,
  estimatedRowHeight = 50,
  overscan = 5,
  maxHeight = '400px',
  className = '',
  ariaLabel = 'Data table',
  emptyMessage = 'No data available',
  stickyHeader = true,
  defaultSortColumn,
  defaultSortDirection = 'asc',
  onSort,
}: DataTableProps<T>) {
  // ============ Refs ============
  const parentRef = React.useRef<HTMLDivElement>(null);

  // ============ State ============
  const [sortState, setSortState] = useState<SortState<T>>({
    column: defaultSortColumn || null,
    direction: defaultSortDirection,
  });

  // ============ Sorting Logic ============
  const sortedData = useMemo(() => {
    if (!sortState.column) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortState.column!];
      const bVal = b[sortState.column!];

      if (aVal === bVal) return 0;

      // Handle undefined/null values
      if (aVal == null) return 1;
      if (bVal == null) return -1;

      // Compare based on type
      let comparison = 0;
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        comparison = aVal.localeCompare(bVal);
      } else if (typeof aVal === 'number' && typeof bVal === 'number') {
        comparison = aVal - bVal;
      } else {
        comparison = String(aVal) < String(bVal) ? -1 : 1;
      }

      return sortState.direction === 'asc' ? comparison : -comparison;
    });
  }, [data, sortState.column, sortState.direction]);

  const handleSort = useCallback((column: Column<T>) => {
    if (!column.sortable) return;

    const columnKey = column.key as keyof T;
    const newDirection: SortDirection =
      sortState.column === columnKey && sortState.direction === 'asc'
        ? 'desc'
        : 'asc';

    setSortState({ column: columnKey, direction: newDirection });
    onSort?.(columnKey, newDirection);
  }, [sortState.column, sortState.direction, onSort]);

  // ============ Virtualization ============
  const rowVirtualizer = useVirtualizer({
    count: sortedData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => estimatedRowHeight,
    overscan,
    measureElement: (el) => el?.getBoundingClientRect().height,
  });

  // ============ Event Handlers ============
  const handleRowClick = useCallback((row: T, index: number) => {
    onRowClick?.(row, index);
  }, [onRowClick]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, row: T, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleRowClick(row, index);
    }
  }, [handleRowClick]);

  // ============ Rendering Helpers ============
  const renderCell = useCallback((column: Column<T>, row: T, rowIndex: number) => {
    const value = row[column.key];
    
    if (column.render) {
      return column.render(value, row, rowIndex);
    }

    if (value !== undefined && value !== null) {
      return String(value);
    }

    return '-';
  }, []);

  // ============ State Renderers ============
  if (loading) {
    return (
      <div 
        className={`data-table-loading ${className}`}
        role="status"
        aria-live="polite"
        style={{ maxHeight }}
      >
        <div className="data-table-spinner" aria-hidden="true">
          <div className="spinner"></div>
        </div>
        <p className="data-table-loading-text">Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div 
        className={`data-table-error ${className}`}
        role="alert"
        aria-live="assertive"
        style={{ maxHeight }}
      >
        <div className="data-table-error-icon" aria-hidden="true">⚠️</div>
        <p className="data-table-error-message">{error}</p>
      </div>
    );
  }

  if (sortedData.length === 0) {
    return (
      <div 
        className={`data-table-empty ${className}`}
        role="status"
        aria-live="polite"
        style={{ maxHeight }}
      >
        <p className="data-table-empty-message">{emptyMessage}</p>
      </div>
    );
  }

  // ============ Main Render ============
  const virtualItems = rowVirtualizer.getVirtualItems();
  const totalHeight = rowVirtualizer.getTotalSize();

  return (
    <div 
      ref={parentRef}
      className={`data-table-wrapper ${className}`}
      style={{ maxHeight, overflow: 'auto' }}
      role="region"
      aria-label={ariaLabel}
    >
      {/* Header */}
      <div 
        className="data-table-header"
        role="rowgroup"
      >
        <div 
          className="data-table-header-row"
          style={{ display: 'flex' }}
          role="row"
        >
          {columns.map((column) => (
            <div
              key={String(column.key)}
              className={`data-table-header-cell ${column.headerClassName || ''}`}
              style={{
                flex: column.width ? 'none' : 1,
                width: column.width,
                textAlign: column.align || 'left',
                padding: '12px 16px',
                fontWeight: 600,
                borderBottom: '2px solid #e5e7eb',
                backgroundColor: stickyHeader ? '#f9fafb' : 'transparent',
                position: stickyHeader ? 'sticky' : 'relative',
                top: stickyHeader ? 0 : 'auto',
                zIndex: stickyHeader ? 10 : 1,
              }}
              role="columnheader"
              aria-sort={
                sortState.column === column.key 
                  ? (sortState.direction === 'asc' ? 'ascending' : 'descending')
                  : 'none'
              }
              onClick={() => handleSort(column)}
              onKeyDown={(e) => {
                if (column.sortable && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  handleSort(column);
                }
              }}
              tabIndex={column.sortable ? 0 : -1}
              style={{
                cursor: column.sortable ? 'pointer' : 'default',
                userSelect: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span className="header-content">{column.header}</span>
              {column.sortable && (
                <span className="sort-indicator" aria-hidden="true" style={{ fontSize: '12px' }}>
                  {sortState.column === column.key ? (
                    sortState.direction === 'asc' ? '▲' : '▼'
                  ) : '⇅'}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div 
        className="data-table-body"
        role="rowgroup"
        style={{ height: `${totalHeight}px`, position: 'relative' }}
      >
        {virtualItems.map((virtualItem) => {
          const row = sortedData[virtualItem.index];
          const rowIndex = virtualItem.index;

          return (
            <div
              key={virtualItem.key}
              className="data-table-row"
              data-index={rowIndex}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
                display: 'flex',
                alignItems: 'stretch',
                borderBottom: '1px solid #e5e7eb',
                backgroundColor: 'white',
                cursor: onRowClick ? 'pointer' : 'default',
                transition: 'background-color 0.15s ease',
              }}
              role="row"
              aria-rowindex={rowIndex + 2} // +2 because header is row 1 (implicit)
              onClick={() => handleRowClick(row, rowIndex)}
              onKeyDown={(e) => handleKeyDown(e, row, rowIndex)}
              tabIndex={onRowClick ? 0 : -1}
              onMouseOver={(e) => {
                if (onRowClick) {
                  e.currentTarget.style.backgroundColor = '#f9fafb';
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
              }}
            >
              {columns.map((column) => (
                <div
                  key={String(column.key)}
                  className={`data-table-cell ${column.className || ''}`}
                  style={{
                    flex: column.width ? 'none' : 1,
                    width: column.width,
                    padding: '12px 16px',
                    textAlign: column.align || 'left',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                  role="cell"
                >
                  {renderCell(column, row, rowIndex)}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div 
        className="data-table-footer"
        role="rowgroup"
        aria-live="polite"
        style={{
          padding: '8px 16px',
          borderTop: '1px solid #e5e7eb',
          backgroundColor: '#f9fafb',
          fontSize: '14px',
          color: '#6b7280',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>
          Showing {sortedData.length} of {data.length} rows
        </span>
        {sortState.column && (
          <span>
            Sorted by {String(sortState.column)} ({sortState.direction})
          </span>
        )}
      </div>
    </div>
  );
}

// ============================================
// Exports
// ============================================

/**
 * Main DataTable component with generic support
 */
export function DataTable<T extends Record<string, any>>(props: DataTableProps<T>) {
  return <DataTableInner {...props} />;
}

/**
 * Memoized version for performance-critical scenarios
 */
export const MemoizedDataTable = memo(DataTableInner) as typeof DataTable;

/**
 * Helper function to create column definitions with proper typing
 */
export function createColumn<T>(
  config: Column<T>
): Column<T> {
  return config;
}

// ============================================
// Default Export
// ============================================

export default DataTable;