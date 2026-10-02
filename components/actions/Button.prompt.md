Primary brand CTA — uppercase tracked label, square corners; use gold `primary` once per view, `outline` for secondary.
```jsx
<Button iconRight={<Icon name="arrow-right" size={14} />}>Reservar mesa</Button>
<Button variant="outline" tone="light">Ver menú completo</Button>
<Button variant="link" tone="light">Ver en mapa</Button>
<Button loading>Consultando…</Button>
```
- `tone` flips neutral colours for cream vs charcoal backgrounds. Press = scale(.98).
