import { ArrowUpRightIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaTwitter, FaInstagram, FaCopyright } from 'react-icons/fa';
import Logo from '@ui/Logo';
import Button from '@ui/Button';

export default function Footer() {
    return (
        <footer className="bg-base-100 text-center text-base-content  lg:text-left">
            <div className="flex gap-3 items-center justify-end border-b-2 border-base-200 p-6">
                <Button href="#!" className="btn-circle btn-sm md:btn-md btn-ghost ">
                    <FaFacebook className="h-5 w-5" />
                </Button>
                <Button href="#!" className="btn-circle btn-sm md:btn-md btn-ghost ">
                    <FaTwitter className="h-5 w-5" />
                </Button>
                <Button href="#!" className="btn-circle btn-sm md:btn-md btn-ghost ">
                    <FaInstagram className="h-5 w-5" />
                </Button>
            </div>
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
                    <div className="flex flex-col items-center md:items-start">
                        <Logo />
                        <p className="mt-3 text-sm font-medium">
                            Here you can use rows and columns to organize your footer content. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 lg:col-start-3 items-center md:items-start">
                        <h6 className=" flex justify-center font-semibold uppercase md:justify-start">
                            Products
                        </h6>
                        <div className="flex items-center ">
                            <ArrowUpRightIcon className="h-4 w-4" />
                            <Button className="btn-link btn-sm normal-case no-underline  text-base-content">
                                Clothing
                            </Button>
                        </div>
                        <div className="flex items-center ">
                            <ArrowUpRightIcon className="h-4 w-4" />
                            <Button className="btn-link btn-sm normal-case no-underline  text-base-content">
                                Accessories
                            </Button>
                        </div>
                        <div className="flex items-center ">
                            <ArrowUpRightIcon className="h-4 w-4" />
                            <Button className="btn-link btn-sm normal-case no-underline  text-base-content">
                                Brands
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3  lg:col-start-4 items-center md:items-start">
                        <h6 className=" flex justify-center font-semibold uppercase md:justify-start">
                            Useful links
                        </h6>
                        <div className="flex items-center ">
                            <ArrowUpRightIcon className="h-4 w-4" />
                            <Button className="btn-link btn-sm normal-case no-underline  text-base-content">
                                Frequent questions
                            </Button>
                        </div>
                        <div className="flex items-center ">
                            <ArrowUpRightIcon className="h-4 w-4" />
                            <Button className="btn-link btn-sm normal-case no-underline  text-base-content">
                                Settings
                            </Button>
                        </div>
                        <div className="flex items-center ">
                            <ArrowUpRightIcon className="h-4 w-4" />
                            <Button className="btn-link btn-sm normal-case no-underline  text-base-content">
                                Orders
                            </Button>
                        </div>
                        <div className="flex items-center ">
                            <ArrowUpRightIcon className="h-4 w-4" />
                            <Button className="btn-link btn-sm normal-case no-underline  text-base-content">
                                Help
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3  lg:col-start-5 items-center md:items-start">
                        <h6 className=" font-semibold uppercase md:justify-start">Contact</h6>
                        <div className=" flex items-center justify-center md:justify-start">
                            <MapPinIcon className="h-5 w-5" />
                            <Button className="btn-link btn-sm normal-case no-underline text-base-content">
                                Neuquen Capital, Argentina
                            </Button>
                        </div>
                        <div className=" flex items-center justify-center md:justify-start">
                            <EnvelopeIcon className="h-5 w-5" />
                            <Button className="btn-link btn-sm normal-case no-underline  text-base-content">
                                info@example.com
                            </Button>
                        </div>
                        <div className="flex items-center justify-center md:justify-start">
                            <PhoneIcon className="h-5 w-5" />
                            <Button className="btn-link btn-sm normal-case no-underline  text-base-content">
                                299-999-9999
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center bg-primary text-primary-content p-6 text-center text-sm">
                <FaCopyright className="mr-2" />
                <span>2023 COPYRIGHT</span>
                <Button
                    className="ml-2 btn-ghost btn-sm font-normal"
                    target="_blank"
                    href="https://guidogennari.vercel.app/"
                    rel="noreferrer"
                >
                    <span className="font-bold">Guido</span>Gennari
                </Button>
            </div>
        </footer>
    );
}
