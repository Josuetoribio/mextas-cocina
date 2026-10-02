Selectable chip for availability slots ("19:30") or quick picks.
```jsx
{slots.map(s => <ChoiceChip key={s.t} selected={s.t===time} disabled={!s.free} onClick={() => setTime(s.t)}>{s.t}</ChoiceChip>)}
```
