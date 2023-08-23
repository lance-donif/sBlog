
export function Ddt({html}){

    const markup = { __html: html };
    return <div dangerouslySetInnerHTML={markup} />;

}