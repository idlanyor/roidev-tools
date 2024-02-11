import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import PropTypes from 'prop-types'
import { useRef, useState } from "react";
import { FaRegPaste, FaDownload } from "react-icons/fa6";
import { Result } from "./Result";

const Form = ({ data }) => {
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)
    const pasteHandler = async () => {
        try {
            const cbText = await navigator.clipboard.readText()
            setInputValue(cbText)
        } catch (e) {
            console.error('CBText : Error Paste from ClipBoard', e)
        }
    }
    return (
        <Card className="bg-white flex justify-center items-center py-5 my-5" shadow={false}>
            <Typography as={"h1"} variant="h3" color="black" className="mt-1 font-bold">
                {data.title}
            </Typography>
            <Typography
                as="p"
                variant="small"
                className="hidden lg:block"
                color="blue-gray"
            >
                {data.desc}
            </Typography>
            <form className="mt-8 sm:py-8 mb-2 w-80 max-w-screen-lg sm:w-11/12">
                <div className="mb-1 flex gap-6 relative">
                    <Input
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => { setInputValue(e.target.value) }}
                        size="lg"
                        placeholder={data.placeholder}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <button type="button" onClick={pasteHandler}
                        className="absolute right-3 top-2 hover:text-gray-500 text-2xl">
                        <FaRegPaste />
                    </button>
                </div>
                <Button className="mt-6 text-center flex items-center justify-center space-x-2" fullWidth>
                    <FaDownload /> <span>Download</span>
                </Button>
            </form>
            <Result/>
        </Card>
        
    );
}
Form.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
    }).isRequired,
}

export default Form