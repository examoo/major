import { Check, CircleCheck } from "lucide-react";

const FeatureList = ({ features }) => {
    return (
        <>
            {features && features.length > 0 && (
                <ul className="mt-4 space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700 gap-x-2">
                            <Check color="green" />
                            {feature}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default FeatureList;