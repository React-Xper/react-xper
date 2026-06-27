import {
  Button,
  Card,
  Badge,
  Avatar,
  Chip,
  Tag,
  Alert,
  Divider,
  Skeleton,
  ProgressBar,
  Spinner,
  Checkbox,
  Switch,
  Textarea,
  Breadcrumb,
  Panel,
  Pagination,
  Toolbar,
  Rating,
  Message,
  Tabs,
  Dialog,
  DataTable,
  TextInput,
} from "@techlestial/uilerial";

export const COMPONENT_LIST = [
  { id: "button", name: "Button", category: "Form", description: "Primary actions with variant and size props.", usage: `import { Button } from "@techlestial/uilerial";\n\n<Button variant="primary">Save</Button>\n<Button variant="outline">Cancel</Button>` },
  { id: "card", name: "Card", category: "Panel", description: "Surface container with optional title and footer.", usage: `import { Card } from "@techlestial/uilerial";\n\n<Card title="Overview">Content here</Card>` },
  { id: "badge", name: "Badge", category: "Misc", description: "Status and count indicators.", usage: `<Badge severity="success">Live</Badge>` },
  { id: "avatar", name: "Avatar", category: "Misc", description: "User representation with image or initials.", usage: `<Avatar label="Kevin" size="lg" />` },
  { id: "chip", name: "Chip", category: "Misc", description: "Compact removable tags.", usage: `<Chip label="React" onRemove={() => {}} />` },
  { id: "tag", name: "Tag", category: "Misc", description: "Category labels.", usage: `<Tag>New</Tag>` },
  { id: "alert", name: "Alert", category: "Messages", description: "Contextual feedback banners.", usage: `<Alert title="Note" severity="info">Message</Alert>` },
  { id: "message", name: "Message", category: "Messages", description: "Inline status messages.", usage: `<Message severity="success">Saved!</Message>` },
  { id: "dialog", name: "Dialog", category: "Overlay", description: "Modal dialogs for focused tasks.", usage: `<Dialog open={open} title="Confirm" onClose={close}>...</Dialog>` },
  { id: "tabs", name: "Tabs", category: "Panel", description: "Tabbed content regions.", usage: `<Tabs items={[{ id: 'a', label: 'Tab', content: <>...</> }]} />` },
  { id: "data-table", name: "DataTable", category: "Data", description: "Sortable data grid for records.", usage: `<DataTable columns={cols} data={rows} />` },
  { id: "pagination", name: "Pagination", category: "Data", description: "Page navigation controls.", usage: `<Pagination page={1} totalPages={5} onPageChange={setPage} />` },
  { id: "text-input", name: "TextInput", category: "Form", description: "Text field input.", usage: `<TextInput placeholder="Email" />` },
  { id: "textarea", name: "Textarea", category: "Form", description: "Multi-line text input.", usage: `<Textarea rows={4} placeholder="Notes" />` },
  { id: "checkbox", name: "Checkbox", category: "Form", description: "Boolean selection.", usage: `<Checkbox label="Accept terms" />` },
  { id: "switch", name: "Switch", category: "Form", description: "Toggle switch control.", usage: `<Switch checked={on} onChange={setOn} label="Dark mode" />` },
  { id: "progress-bar", name: "ProgressBar", category: "Misc", description: "Progress indicator.", usage: `<ProgressBar value={65} />` },
  { id: "spinner", name: "Spinner", category: "Misc", description: "Loading indicator.", usage: `<Spinner size="md" />` },
  { id: "skeleton", name: "Skeleton", category: "Misc", description: "Loading placeholders.", usage: `<Skeleton variant="title" />` },
  { id: "rating", name: "Rating", category: "Form", description: "Star rating input.", usage: `<Rating value={4} onChange={setRating} />` },
  { id: "breadcrumb", name: "Breadcrumb", category: "Menu", description: "Hierarchy navigation.", usage: `<Breadcrumb items={[{ label: 'Home', href: '/' }]} />` },
  { id: "panel", name: "Panel", category: "Panel", description: "Section panel with header.", usage: `<Panel title="Settings">...</Panel>` },
  { id: "toolbar", name: "Toolbar", category: "Panel", description: "Action bar container.", usage: `<Toolbar><Button>Action</Button></Toolbar>` },
  { id: "divider", name: "Divider", category: "Misc", description: "Visual separator.", usage: `<Divider />` },
];

const tableData = [
  { name: "Amanda Williams", role: "Admin", status: "Active" },
  { name: "Kevin Myat", role: "Engineer", status: "Active" },
  { name: "Studio Bot", role: "Agent", status: "Idle" },
];

const tableCols = [
  { key: "name", header: "Name" },
  { key: "role", header: "Role" },
  { key: "status", header: "Status" },
];

export const DEMOS = {
  button: () => (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>
    </>
  ),
  card: () => (
    <Card title="Sprint board" footer={<Button size="sm">View all</Button>}>
      Ship Uilerial v2 — 30 components live.
    </Card>
  ),
  badge: () => (
    <>
      <Badge>Primary</Badge>
      <Badge severity="success">Success</Badge>
      <Badge severity="warning">Warning</Badge>
      <Badge severity="danger">Danger</Badge>
    </>
  ),
  avatar: () => (
    <>
      <Avatar label="KM" size="sm" />
      <Avatar label="TL" size="md" />
      <Avatar label="UI" size="lg" />
    </>
  ),
  chip: () => <Chip label="TypeScript" onRemove={() => {}} />,
  tag: () => <Tag>v2.0</Tag>,
  alert: () => <Alert title="Industrialize" severity="info">Uilerial is ready for production.</Alert>,
  message: () => <Message severity="success">Component saved successfully.</Message>,
  dialog: ({ dialogOpen, setDialogOpen }) => (
    <>
      <Button onClick={() => setDialogOpen(true)}>Open dialog</Button>
      <Dialog
        open={dialogOpen}
        title="Confirm deploy"
        onClose={() => setDialogOpen(false)}
        footer={
          <>
            <Button variant="ghost" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setDialogOpen(false)}>Deploy</Button>
          </>
        }
      >
        Publish @techlestial/uilerial@2.0.0 to npm?
      </Dialog>
    </>
  ),
  tabs: () => (
    <Tabs
      items={[
        { id: "1", label: "Overview", content: <p>Studio overview content.</p> },
        { id: "2", label: "API", content: <p>Component API reference.</p> },
        { id: "3", label: "Theming", content: <p>CSS Modules tokens.</p> },
      ]}
    />
  ),
  "data-table": () => <DataTable columns={tableCols} data={tableData} />,
  pagination: ({ page, setPage }) => (
    <Pagination page={page} totalPages={5} onPageChange={setPage} />
  ),
  "text-input": () => <TextInput placeholder="you@studio.dev" />,
  textarea: () => <Textarea placeholder="Describe your component..." />,
  checkbox: () => <Checkbox label="Subscribe to changelog" defaultChecked />,
  switch: ({ sw, setSw }) => <Switch checked={sw} onChange={setSw} label="Enable agents" />,
  "progress-bar": () => <ProgressBar value={72} />,
  spinner: () => <Spinner size="lg" />,
  skeleton: () => (
    <div style={{ width: 280 }}>
      <Skeleton variant="title" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </div>
  ),
  rating: ({ rating, setRating }) => <Rating value={rating} onChange={setRating} />,
  breadcrumb: () => (
    <Breadcrumb
      items={[
        { label: "Studio", href: "/" },
        { label: "Components", href: "/components" },
        { label: "Button" },
      ]}
    />
  ),
  panel: () => (
    <Panel title="Forge status" actions={<Badge severity="success">Live</Badge>}>
      30 components · MIT · @techlestial
    </Panel>
  ),
  toolbar: () => (
    <Toolbar>
      <Button size="sm">New</Button>
      <Button size="sm" variant="outline">Export</Button>
      <Divider vertical />
      <Button size="sm" variant="ghost">Settings</Button>
    </Toolbar>
  ),
  divider: () => (
    <div style={{ width: "100%" }}>
      <p>Above</p>
      <Divider />
      <p>Below</p>
    </div>
  ),
};
