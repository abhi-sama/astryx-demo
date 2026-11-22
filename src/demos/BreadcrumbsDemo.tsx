import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';

export default function BreadcrumbsDemo() {
  return (
    <Breadcrumbs label="Location">
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Projects</BreadcrumbItem>
      <BreadcrumbItem isCurrent>Astryx demo</BreadcrumbItem>
    </Breadcrumbs>
  );
}
