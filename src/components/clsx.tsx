import clsx from "clsx";

interface IClsxTestProps {
    isActive: boolean;
    hasHover: boolean;
    hasSomething: boolean;
}

const ClsxTest = ({ isActive, hasHover, hasSomething }: IClsxTestProps) => {
    return (
        <div className={clsx(['class-a', 'class-b', hasSomething && 'something'], { 'is-active': isActive, 'has-hover': hasHover })}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut commodi, ipsam veniam minima nihil nisi in, exercitationem atque provident nemo eius totam numquam ab voluptates ducimus non expedita! Ducimus, exercitationem.
        </div>
    );
};

export default ClsxTest;