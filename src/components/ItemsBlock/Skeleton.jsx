import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={260}
        height={370}
        viewBox="0 0 260 370"
        backgroundColor="#3b0a6c"
        foregroundColor="#4a1084"
    >
        <circle cx="129" cy="118" r="78"/>
        <rect x="39" y="207" rx="10" ry="10" width="180" height="30"/>
        <rect x="0" y="333" rx="7" ry="7" width="87" height="30"/>
        <rect x="150" y="327" rx="20" ry="20" width="110" height="40"/>
        <rect x="1" y="252" rx="12" ry="12" width="260" height="63"/>
    </ContentLoader>
)

export default Skeleton;