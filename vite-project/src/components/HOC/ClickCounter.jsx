import withCounter from "./HOC(with)/withCounter";

const ClickCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    );
};

export default withCounter(ClickCounter);