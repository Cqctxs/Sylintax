const valid = 'ABCDEFGHIKLMNOPQRSTUVWXY'

const minSize = 15;
const maxSize = 50;

const randInRange = (min, max) => Math.floor(Math.random*(max-min)) + min;

const random = () => valid.charAt(Math.floor(Math.random*valid.length))

const genRandStream = () => 
    new Array(parseInt(randInRange(minSize, maxSize))).fill().map(_ => random)

const Rain = () => {
    return <div className=" [writing-mode:vertical-lr] whitespace-nowrap select-none" style={{ textOrientation: 'upright' }}>
        {genRandStream().split('').map(char =>
        <img
            className="inline-block w-[50px] h-[50px]"
            src={require(`../../images/${char}.png`)}
            alt={"letter " + char}
        />
        )}
    </div>
};

export default Rain;