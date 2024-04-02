/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Container.css";
import { Cover } from "../Cover/Cover";

interface ContainerProps {}

interface PageProps {
	children?: React.ReactNode;
	number?: number; // Assuming `number` is a prop you pass to `Page`
}

const PageCover = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
	return (
		<div ref={ref} data-density="hard">
			{props.children}
		</div>
	);
});

const Page = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
	return (
		<div ref={ref} data-density="soft">
			{props.children}
		</div>
	);
});

export const Container: React.FC<ContainerProps> = () => {
	return (
		<div className="container">
			<HTMLFlipBook
				width={300}
				height={500}
				size="stretch"
				minWidth={400}
				maxWidth={1000}
				minHeight={600}
				maxHeight={1000}
				maxShadowOpacity={0.5}
				showCover={true}
				mobileScrollSupport={true}
				onFlip={() => {}}
				onChangeOrientation={() => {}}
				onChangeState={() => {}}
				className="container"
				style={{}}
				startPage={1}
				drawShadow={true}
				flippingTime={1000}
				usePortrait={false}
				startZIndex={0}
				autoSize={false}
				clickEventForward={true}
				useMouseEvents={true}
				swipeDistance={0}
				showPageCorners={true}
				disableFlipByClick={false}
			>
				<PageCover>
					{/* <div className="myfakepages"> */}
					<Cover />
					{/* </div> */}
				</PageCover>
				<Page>
					<div className="myfakepages" style={{ backgroundColor: "grey" }}>
						this is page 2
					</div>
				</Page>
				<Page>
					<div className="myfakepages" style={{ backgroundColor: "blue" }}>
						this is page 3
					</div>
				</Page>
				<Page>
					<div className="myfakepages" style={{ backgroundColor: "green" }}>
						this is page 4
					</div>
				</Page>
			</HTMLFlipBook>
		</div>
	);
};
