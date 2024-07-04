// import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from "react-helmet-async";

type Props = {
	children: JSX.Element | JSX.Element[];
	description?: string;
	title?: string;
};

const PageContainer = ({ children, description, title }: Props) => (
	<HelmetProvider>
		<div>
			<Helmet>
				<title>{title}</title>
				<meta content={description} name="description" />
			</Helmet>
			{children}
		</div>
	</HelmetProvider>
);

export default PageContainer;
