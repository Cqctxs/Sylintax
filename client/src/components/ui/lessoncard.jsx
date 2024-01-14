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

const LessonCard = ({ title, description, id }) => {
    return (
        <Card className="p-10 w-1/3 bg-background-color border-primary-color border-2 text-text-color">
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
                    <div className="rounded-full absolute left-0 bg-secondary-color w-full h-10"></div>
                    <div className="rounded-full absolute left-0 bg-primary-color w-10 h-10"></div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default LessonCard;
