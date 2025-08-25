import { Breadcrumb } from "@chakra-ui/react";
import type { AppBreadcrumbsProps } from "./types";

export const AppBreadcrumbs = ({
  links,
  currentLinkLabel,
}: AppBreadcrumbsProps) => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        {links.map((link) => (
          <>
            <Breadcrumb.Item>
              <Breadcrumb.Link
                cursor="pointer"
                _hover={{ color: "textPrimary", transition: "0.5s" }}
                onClick={link.navigate}
              >
                {link.label}
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator/>
          </>
        ))}
        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink color="textPrimary">
            {currentLinkLabel}
          </Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
};
