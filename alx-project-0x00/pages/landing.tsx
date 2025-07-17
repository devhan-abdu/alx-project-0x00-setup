import Card from "@/components/Card"
import Button from '@/components/Button'


const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <Button title="Small Button" styles="rounded-sm text-sm px-2 py-1"/>
            <Button title="Medium Button" styles="rounded-md text-base px-4 py-2" />
            <Button title="Large Button" styles="rounded-lg text-sm px-6 py-3" />
            <Button title="Large Button" styles="rounded-full text-sm px-6 py-3" />

        </div>
    )
}
export default Landing;