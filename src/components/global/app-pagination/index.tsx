import { Pagination, ButtonGroup, IconButton, Center } from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import type { AppPaginationProps } from "./types";
import { memo } from "react";

const AppPagination = ({
  changePage,
  page,
  totalElements,
  pageSize,
}: AppPaginationProps) => {
  return (
    <Center>
      <Pagination.Root
        defaultPage={1}
        count={totalElements}
        pageSize={pageSize}
        page={page}
        onPageChange={(e) => changePage(e.page)}
      >
        <ButtonGroup variant="ghost" size="sm">
          <Pagination.PrevTrigger asChild>
            <IconButton color="textPrimary">
              <HiChevronLeft/>
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton
                color="textPrimary !important"
                variant={{ base: "ghost", _selected: "outline" }}
              >
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton color="textPrimary">
              <HiChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Center>
  );
};

export default memo(AppPagination);
