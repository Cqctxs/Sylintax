/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import useInterval from '@use-it/interval';

// Constants
const VALID_CHARS = 'BCDEFGHIKLMNOPQRSTUVWXY';
const STREAM_MUTATION_ODDS = 0.02;

const MIN_STREAM_SIZE = 7;
const MAX_STREAM_SIZE = 13;

const MIN_INTERVAL_DELAY = 50;
const MAX_INTERVAL_DELAY = 100;

const MIN_DELAY_BETWEEN_STREAMS = 100;
const MAX_DELAY_BETWEEN_STREAMS = 8000;

const getRandInRange = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

const getRandChar = () =>
    VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));

const getRandStream = () =>
    new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
        .fill()
        .map(_ => getRandChar());

const getMutatedStream = stream => {
    const newStream = [];
    for (let i = 1; i < stream.length; i++) {
        if (Math.random() < STREAM_MUTATION_ODDS) {
            newStream.push(getRandChar());
        } else {
            newStream.push(stream[i]);
        }
    }
    newStream.push(getRandChar());
    return newStream;
};

const RainStream = props => {
    const [stream, setStream] = useState(getRandStream());
    const [topPadding, setTopPadding] = useState(stream.length * -50);
    const [intervalDelay, setIntervalDelay] = useState(null);

    // Initialize intervalDelay
    useEffect(() => {
        setTimeout(() => {
            setIntervalDelay(getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));
        }, getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS));
    }, []);

    useInterval(() => {
        if (!props.height) return;

        if (!intervalDelay) return;

        // If stream is off the screen, reset it after timeout
        if (topPadding > props.height) {
            setStream([]);
            const newStream = getRandStream();
            setStream(newStream);
            setTopPadding(newStream.length * -50);
            setIntervalDelay(null);
            setTimeout(
                () =>
                    setIntervalDelay(
                        getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY),
                    ),
                getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS),
            );
        } else {
            setTopPadding(topPadding + 50);
        }
        // setStream(stream => [...stream.slice(1, stream.length), getRandChar()]);
        setStream(getMutatedStream);
    }, intervalDelay);

    return (
        <div
            style={{
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
                userSelect: 'none',
                whiteSpace: 'nowrap',
                marginTop: topPadding,
                fontSize: 50,
            }}>
            {stream.map((char, index) => (
                <img
                    className="inline-block w-[50px] h-[50px]"
                    src={require(`../../images/${char}.png`)}
                    alt={"letter " + char}

                    style={{
                        // Reduce opacity for last chars
                        opacity: index < 10 ? 0.05 + index * 0.1 : 1,
                        color: index === stream.length - 1 ? '#fff' : undefined,
                    }}
                />
            ))}
        </div>
    );
};

const Rain = props => {
    const containerRef = useRef(null);
    const [containerSize, setContainerSize] = useState(null); // ?{width, height}

    useEffect(() => {
        const boundingClientRect = containerRef.current.getBoundingClientRect();
        setContainerSize({
            width: boundingClientRect.width,
            height: boundingClientRect.height,
        });
    }, []);

    const streamCount = containerSize ? Math.floor(containerSize.width / 80) : 0;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                overflow: 'ignore',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            }}
            ref={containerRef}>
            {new Array(streamCount).fill().map(_ => (
                <RainStream height={containerSize?.height} />
            ))}
        </div>
    );
};

export default Rain;