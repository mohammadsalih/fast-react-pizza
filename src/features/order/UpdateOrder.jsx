import { useFetcher } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const id = params.orderId;
  const data = { priority: true };

  await updateOrder(id, data);

  return null;
}

export default UpdateOrder;
