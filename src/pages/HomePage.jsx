import OrderForm from "../components/OrderForm";

export default function HomePage({ onSubmit }) {
    return <OrderForm onSubmit={onSubmit} />
}