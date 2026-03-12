import React, { useState, useMemo } from 'react';
import { DataTable, Column } from './index';

// ============================================
// Demo Data Types
// ============================================

interface DemoUser {
  id: number;
  name: string;
  email: string;
  department: string;
  location: string;
  salary: number;
  startDate: string;
  status: 'active' | 'on-leave' | 'terminated';
}

// Generate realistic mock data
const generateDemoData = (count: number): DemoUser[] => {
  const departments = ['Engineering', 'Design', 'Marketing', 'Sales', 'HR', 'Finance', 'Support'];
  const locations = ['Mumbai', 'Pune', 'Bangalore', 'Hyderabad', 'Delhi', 'Remote'];
  const statuses: DemoUser['status'][] = ['active', 'on-leave', 'terminated'];
  const firstNames = ['Aarav', 'Priya', 'Rohan', 'Neha', 'Vikram', 'Ananya', 'Rajesh', 'Kavya', 'Suresh', 'Meera'];
  const lastNames = ['Patel', 'Sharma', 'Singh', 'Kumar', 'Gupta', 'Reddy', 'Nair', 'Mukherjee', 'Desai', 'Thakur'];

  return Array.from({ length: count }, (_, i) => {
    const firstName = firstNames[i % firstNames.length];
    const lastName = lastNames[Math.floor(i / firstNames.length) % lastNames.length];
    const hireDate = new Date(2020 + (i % 4), (i * 2) % 12, (i % 28) + 1);
    
    return {
      id: i + 1,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@paradox.com`,
      department: departments[i % departments.length],
      location: locations[i % locations.length],
      salary: 50000 + (i * 2378) % 100000,
      startDate: hireDate.toLocaleDateString('en-IN'),
      status: statuses[i % statuses.length],
    };
  });
};

// ============================================
// Column Definitions
// ============================================

const userColumns: Column<DemoUser>[] = [
  { key: 'id', header: 'ID', width: '80px', align: 'center' },
  { 
    key: 'name', 
    header: 'Employee Name', 
    sortable: true,
    width: '180px',
    render: (value, user) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#3b82f6',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          fontWeight: 600,
        }}>
          {value.charAt(0)}
        </div>
        <span style={{ fontWeight: 500 }}>{value}</span>
      </div>
    ),
  },
  { 
    key: 'email', 
    header: 'Email', 
    sortable: true,
    render: (value) => (
      <a href={`mailto:${value}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>
        {value}
      </a>
    ),
  },
  { key: 'department', header: 'Department', sortable: true },
  { key: 'location', header: 'Location', sortable: true },
  {
    key: 'salary',
    header: 'Salary',
    align: 'right',
    render: (value) => (
      <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>
        ₹{value.toLocaleString('en-IN')}
      </span>
    ),
  },
  { key: 'startDate', header: 'Start Date' },
  {
    key: 'status',
    header: 'Status',
    render: (value) => {
      const styles: Record<string, { bg: string; text: string; border: string }> = {
        active: { bg: '#dcfce7', text: '#166534', border: '#22c55e' },
        'on-leave': { bg: '#fef3c7', text: '#92400e', border: '#f59e0b' },
        terminated: { bg: '#fee2e2', text: '#991b1b', border: '#ef4444' },
      };
      const style = styles[value];
      
      return (
        <span style={{
          display: 'inline-block',
          padding: '4px 12px',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: 600,
          backgroundColor: style.bg,
          color: style.text,
          border: `1px solid ${style.border}`,
          textTransform: 'capitalize',
        }}>
          {value.replace('-', ' ')}
        </span>
      );
    },
  },
];

// ============================================
// Demo Component
// ============================================

export default function DataTableDemo() {
  const [selectedUser, setSelectedUser] = useState<DemoUser | null>(null);
  const [datasetSize, setDatasetSize] = useState(100);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Simulate loading
  const handleRefresh = () => {
    setLoading(true);
    setError(null);
    setTimeout(() => setLoading(false), 1000);
  };

  const data = useMemo(() => generateDemoData(datasetSize), [datasetSize]);

  const handleRowClick = (user: DemoUser, index: number) => {
    setSelectedUser(user);
    console.log(`Row ${index} clicked:`, user);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <header style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 8px 0', color: '#111827' }}>
          PARADOX DataTable Component
        </h1>
        <p style={{ color: '#6b7280', margin: 0 }}>
          High-performance virtualized table with full accessibility support
        </p>
      </header>

      {/* Controls */}
      <div style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '24px',
        padding: '16px',
        background: '#f9fafb',
        borderRadius: '8px',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label htmlFor="dataset-size" style={{ fontWeight: 500 }}>Dataset Size:</label>
          <select
            id="dataset-size"
            value={datasetSize}
            onChange={(e) => setDatasetSize(Number(e.target.value))}
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              background: 'white',
            }}
          >
            <option value={10}>10 rows</option>
            <option value={100}>100 rows</option>
            <option value={1000}>1,000 rows</option>
            <option value={10000}>10,000 rows</option>
          </select>
        </div>

        <button
          onClick={handleRefresh}
          disabled={loading}
          style={{
            padding: '8px 16px',
            backgroundColor: loading ? '#9ca3af' : '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: 500,
          }}
        >
          {loading ? 'Loading...' : 'Refresh'}
        </button>

        <div style={{ 
          padding: '8px 16px', 
          background: '#e0e7ff', 
          borderRadius: '6px',
          color: '#3730a3',
          fontSize: '14px',
          fontWeight: 500,
        }}>
          {data.length} records
        </div>
      </div>

      {/* Main Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '24px' }}>
        {/* DataTable */}
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '8px', 
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <DataTable<DemoUser>
            data={data}
            columns={userColumns}
            onRowClick={handleRowClick}
            maxHeight="700px"
            defaultSortColumn="name"
            defaultSortDirection="asc"
            loading={loading}
            error={error}
            ariaLabel="Employee directory"
            estimatedRowHeight={56}
            overscan={5}
          />
        </div>

        {/* Side Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Selected User Card */}
          <div style={{
            background: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}>
            <h3 style={{ 
              fontSize: '16px', 
              fontWeight: 600, 
              margin: '0 0 16px 0',
              color: '#111827',
            }}>
              Selected Employee
            </h3>
            {selectedUser ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}>
                    {selectedUser.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '16px' }}>
                      {selectedUser.name}
                    </div>
                    <div style={{ color: '#6b7280', fontSize: '14px' }}>
                      {selectedUser.department}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'grid', gap: '8px', fontSize: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>Email:</span>
                    <span style={{ color: '#3b82f6' }}>{selectedUser.email}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>Location:</span>
                    <span>{selectedUser.location}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>Salary:</span>
                    <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>
                      ₹{selectedUser.salary.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>Start Date:</span>
                    <span>{selectedUser.startDate}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ 
                textAlign: 'center', 
                color: '#9ca3af', 
                padding: '32px 0',
                fontSize: '14px',
              }}>
                Click a row to view details
              </div>
            )}
          </div>

          {/* Stats Card */}
          <div style={{
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 16px 0' }}>
              Performance Stats
            </h3>
            <div style={{ display: 'grid', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ opacity: 0.9 }}>Total Employees</span>
                <span style={{ fontWeight: 700, fontSize: '18px' }}>{data.length}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ opacity: 0.9 }}>Active</span>
                <span style={{ fontWeight: 700 }}>
                  {data.filter(d => d.status === 'active').length}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ opacity: 0.9 }}>Avg. Salary</span>
                <span style={{ fontWeight: 700, fontFamily: 'monospace' }}>
                  ₹{Math.round(data.reduce((sum, d) => sum + d.salary, 0) / data.length).toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div style={{
            background: '#f0f9ff',
            border: '1px solid #bae6fd',
            borderRadius: '8px',
            padding: '16px',
          }}>
            <h4 style={{margin: '0 0 8px 0', color: '#0369a1', fontSize: '14px', fontWeight: 600}}>
              💡 Tip
            </h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#0c4a6e', lineHeight: 1.5 }}>
              Try selecting 10,000 rows from the dropdown. The table uses virtual scrolling to maintain 60fps performance regardless of dataset size.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>
          Features
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
        }}>
          {[
            { title: '⚡ Virtual Scrolling', desc: 'Smooth performance with large datasets using TanStack Virtual' },
            { title: '♿ WCAG 2.1 AA', desc: 'Full accessibility with keyboard navigation and screen reader support' },
            { title: '🎨 Customizable', desc: 'Flexible column rendering, sorting, and styling options' },
            { title: '📱 Responsive', desc: 'Mobile-first design that adapts to any screen size' },
            { title: '🧪 TypeScript', desc: 'Full type safety with generic support for any data shape' },
            { title: '📊 Sorting', desc: 'Client-side sorting with visual ARIA indicators' },
          ].map((feature, i) => (
            <div key={i} style={{
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
            }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>
                {feature.title}
              </h3>
              <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: '40px',
        padding: '20px',
        borderTop: '1px solid #e5e7eb',
        textAlign: 'center',
        color: '#6b7280',
        fontSize: '14px',
      }}>
        <p style={{ margin: 0 }}>
          Built by <strong>Bhakti</strong> • Frontend Developer at PARADOX • 
          Senior Manager: Maya • CEO: Aniket sir
        </p>
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>
          DataTable v1.0.0 • MIT License
        </p>
      </footer>
    </div>
  );
}