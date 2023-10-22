import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from './redux/gretting_slice';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.greeting);
  const loading = useSelector((state) => state.greeting.loading);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>{greeting.message}</p>}
      <h4>Refresh to get a new random gretting</h4>
    </div>
  );
}

export default Greeting;
