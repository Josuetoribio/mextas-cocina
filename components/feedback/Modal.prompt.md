Dialog for dish detail, reservation confirmation, event request form.
```jsx
<Modal open={!!dish} onClose={() => setDish(null)} label={dish?.name}>…</Modal>
```
