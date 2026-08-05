import Header from "../components/Header";
import OrderForm from "../components/OrderForm";

export default function HomePage({ onSubmit }) {
    return (
        <>
            <Header />
            <OrderForm onSubmit={onSubmit} />
        </>
    );
}