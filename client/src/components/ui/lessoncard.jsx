import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./card";
import { Button } from "./button";
import { Link } from "react-router-dom";
import { Check, Lock } from "lucide-react";

const LessonCard = ({ title, description, id, next, status }) => {
    return (
        <div className="inline-flex w-96 items-center justify-center m-8">
            {status === "unlocked" &&
                <Card className="p-10 bg-background-color border-primary-color border-2 text-text-color">
                    <CardTitle className="font-ShinGoPro mb-5">{title}</CardTitle>
                    <CardDescription className="text-primary-color">
                        {description}
                    </CardDescription>
                    <CardContent className="mt-5 flex justify-center items-center">
                        <Link to={`/lesson/${id}`}>
                            <Button className="bg-secondary-color hover:bg-primary-color">
                                <span className="font-ShinGoPro">Start Lesson</span>
                            </Button>
                        </Link>
                    </CardContent>
                    <CardFooter className="flex justify-center items-center">
                        <div className="relative w-full pt-5">
                            <div className="rounded-full absolute left-0 bg-secondary-color w-full h-5"></div>
                            <div className="rounded-full absolute left-0 bg-primary-color w-5 h-5"></div>
                        </div>
                    </CardFooter>
                </Card>
            }
            {status === "completed" &&
                <Card className="p-10 bg-background-color border-primary-color border-2 text-text-color">
                    <CardTitle className="font-ShinGoPro mb-5">{title}</CardTitle>
                    <CardDescription className="text-primary-color">
                        {description}
                    </CardDescription>
                    <CardContent className="mt-5 flex justify-center items-center">
                        <Link to={`/lesson/${id}`}>
                            <Button className="bg-secondary-color hover:bg-primary-color">
                                <span className="font-ShinGoPro">Start Lesson</span>
                            </Button>
                        </Link>
                    </CardContent>
                    <CardFooter className="flex justify-center items-center">
                        <div className="relative w-full pt-5">
                            <div className="rounded-full absolute left-0 bg-primary-color w-full h-5"></div>
                            <Check className="absolute right-1 w-5 h-5 text-background-color" />
                        </div>
                    </CardFooter>
                </Card>
            }
            {status === "locked" &&
                <Card className="grayscale p-10 bg-background-color border-primary-color border-2 text-text-color">
                    <CardTitle className="font-ShinGoPro mb-5">{title}</CardTitle>
                    <CardDescription className="text-primary-color">
                        {description}
                    </CardDescription>
                    <CardContent className="mt-5 flex justify-center items-center">
                        <Link to={`/lesson/${id}`}>
                            <Button className="bg-secondary-color hover:bg-primary-color">
                                <span className="font-ShinGoPro">Start Lesson</span>
                            </Button>
                        </Link>
                    </CardContent>
                    <CardFooter className="flex justify-center items-center">
                        <div className="relative w-full pt-5">
                            <div className="rounded-full absolute left-0 bg-secondary-color w-full h-5"></div>
                            <div className="rounded-full absolute left-0 bg-primary-color w-5 h-5"></div>
                        </div>
                    </CardFooter>
                    <div className="absolute top-0 left-0 w-full h-full bg-white/30 rounded-lg">
                        <Lock className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 text-background-color" />
                    </div>
                </Card>
            }
        </div>
    );
};

export default LessonCard;
