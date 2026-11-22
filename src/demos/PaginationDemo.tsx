import {useState} from 'react';
import {Pagination} from '@astryxdesign/core/Pagination';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';

export default function PaginationDemo() {
  const [page, setPage] = useState(3);
  return (
    <VStack gap={2}>
      <Pagination page={page} onChange={setPage} totalPages={12} hasFirstLast label="Results pages" />
      <Text>Page {page} of 12</Text>
    </VStack>
  );
}
