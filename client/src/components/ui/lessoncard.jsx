import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './card';
import { Button } from './button';

const LessonCard = ({ title }) => {
    return (
        <Card className='p-10 w-1/3 bg-background-color border-primary-color border-2 text-text-color'>
            <CardTitle className='font-ShinGoPro mb-5'>{title}</CardTitle>
            <CardDescription className='text-primary-color'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardDescription>
            <CardContent>
                <Button></Button>
            </CardContent>
            <CardFooter className='flex justify-center items-center'>
                <div className='relative w-full pt-5'>
                    <div className='rounded-full absolute left-0 bg-secondary-color w-full h-10'></div>
                    <div className='rounded-full absolute left-0 bg-primary-color w-10 h-10'></div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default LessonCard;
