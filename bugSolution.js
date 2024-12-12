```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: The timeout prevents the infinite loop
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval); //cleanup function
  }, []);

  return <div>Count: {count}</div>;
}
```