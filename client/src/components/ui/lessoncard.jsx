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
        <Card>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardDescription>
            <CardFooter className='flex justify-center items-center'>
                <div>
                    <div className='bg-black w-10 h-10'>a</div>
                    <div className=' bg-black w-10 h-10'>b</div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default LessonCard;
