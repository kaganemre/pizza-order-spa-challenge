import Success from "../components/Success";
import type { SuccessProps } from "../types/orderResponse";

export default function SuccessPage({ apiResponse }: SuccessProps) {
    return <Success apiResponse={apiResponse} />
}