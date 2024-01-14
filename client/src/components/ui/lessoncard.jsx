import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './card';

const LessonCard = ({ title }) => {
    return (
        <Card className='p-10 w-1/3'>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardDescription>
            <CardFooter className='flex justify-center items-center'>
                <div className='relative w-full pt-5'>
                    <div className='rounded-full absolute left-0 bg-black w-full h-10'></div>
                    <div className='rounded-full absolute left-0 bg-green-500 w-10 h-10'></div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default LessonCard;
