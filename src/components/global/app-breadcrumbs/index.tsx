import { Breadcrumb } from "@chakra-ui/react";
import type { AppBreadcrumbsProps } from "./types";
import React from "react";
import { useScreenSize } from "../../../hooks/use-screen-size";

export const AppBreadcrumbs = ({
  links,
  currentLinkLabel,
}: AppBreadcrumbsProps) => {
  const { isMobile } = useScreenSize();
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        {links.map((link) => (
          <React.Fragment key={link.label}>
            <Breadcrumb.Item>
              <Breadcrumb.Link
                cursor="pointer"
                _hover={{ color: "textPrimary", transition: "0.5s" }}
                onClick={link.navigate}
                fontSize={isMobile ? "smaller" : "sm"}
              >
                {link.label}
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
          </React.Fragment>
        ))}
        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink
            color="textPrimary"
            fontSize={isMobile ? "smaller" : "sm"}
          >
            {currentLinkLabel}
          </Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
};
