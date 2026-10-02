Text / email / tel / date field for reservation, event and contact forms.
```jsx
<Input label="Nombre" placeholder="Tu nombre" value={v} onChange={e => setV(e.target.value)} />
<Input label="Correo" type="email" error="Ingresa un correo válido" tone="light" />
```
