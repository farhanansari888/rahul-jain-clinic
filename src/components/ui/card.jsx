export function Card({ children, className = "" }) {
  return <div className={`rounded-xl ${className}`}>{children}</div>;
}
export const CardContent = ({ children }) => <div>{children}</div>;
export const CardHeader = ({ children }) => <div>{children}</div>;
export const CardTitle = ({ children }) => <h3>{children}</h3>;
export const CardDescription = ({ children }) => <p>{children}</p>;
export const CardFooter = ({ children }) => <div>{children}</div>;