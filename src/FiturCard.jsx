import PropTypes from 'prop-types'
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const FiturCard = ({ data }) => {

    const fontStyle = {
        fontFamily: 'Quicksand'
    }
    return (
        <div style={fontStyle} className="px-1 mb-8 grid  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 grid-cols-2 gap-4"> {/* Mengubah grid menjadi 3 kolom */}
            {
                data && data.map((d, index) => (
                    <Link key={index} to={d.link}>
                        <Card key={index} className="mt-6 hover:text-red-500 mx-auto w-36 sm:w-40">
                            <CardBody className="flex flex-col items-center text-center">
                                <d.icon className="w-[50px] h-auto " />
                                <Typography variant="small" color="blue-gray" className="mb-2 mt-2 font-bold">
                                    {d.title}
                                </Typography>
                                <Typography
                                    as="p"
                                    variant="small"
                                    className="hidden lg:block"
                                    color="blue-gray"
                                >
                                    {d.desc}
                                </Typography>
                            </CardBody>
                        </Card>
                    </Link>
                ))
            }
        </div>
    );
};

FiturCard.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.elementType,
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    })).isRequired,
}

export default FiturCard;
