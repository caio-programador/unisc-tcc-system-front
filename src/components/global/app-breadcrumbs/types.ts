export interface AppBreadcrumbsLink {
    label: string;
    navigate: () => void;
}

export interface AppBreadcrumbsProps {
    links: AppBreadcrumbsLink[];
    currentLinkLabel: string;
}