import React from 'react';
import Button from '../../components/common/Button/Button';

const ComponentsPage: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>UI Components Showcase</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>Button Component</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button disabled>Disabled Button</Button>
          <Button to="/">Link Button</Button>
        </div>
      </section>

      {/* Add more components here as they are created */}
    </div>
  );
};

export default ComponentsPage;