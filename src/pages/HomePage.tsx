import OrderForm from "../components/OrderForm";
import type { OrderFormProps } from "../types/orderForm";

export default function HomePage({ onSubmit }: OrderFormProps) {
    return <OrderForm onSubmit={onSubmit} />
}