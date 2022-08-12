import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
    <ContentLoader
        className="skeleton"
        speed={2}
        width={240}
        height={380}
        viewBox="0 0 260 370"
        backgroundColor="#3b0a6c"
        foregroundColor="#4a1084"
    >
        <circle cx="130" cy="80" r="78"/>
        <rect x="40" y="195" rx="10" ry="10" width="180" height="30"/>
        <rect x="0" y="335" rx="7" ry="7" width="87" height="30"/>
        <rect x="150" y="330" rx="20" ry="20" width="110" height="40"/>
        <rect x="0" y="242" rx="12" ry="12" width="260" height="73"/>
    </ContentLoader>
)

export default Skeleton;