import MDXComponents from '@theme-original/MDXComponents'
import {AppDomain, SSL, APIEndpoint, RecommendedBy, GlobalAuditorRole, CFNetworking, AppSvcLinks, ComplianceLinks, IpsecNote, ConsoleLinks, ManageIsoSegLink, AdminRole, AdminReadOnlyRole, BillingManagerRoleNote, BillingManagerRole, OrAppsMan, PlatformName, AppSecGroupsDefault, ContainerNetworkLink, AppRuntimeAbbr, AppRuntimeFirst, ConceptsSfVsFullHeader, SmallFootprintComparison, ConceptsProductModelHeader, ConceptsProductModelImage, OpsManager, CompanyName, AsgNote, AppSecGroupsLink} from '@site/src/components/Constants'
import ConditionalContent from '@site/src/components/ConditionalContent'
import PartialLoader from '@site/src/components/PartialLoader';
import CustomComponents from '@site/src/components/ComponentProvider'

export default {
  ...MDXComponents,
  AppRuntimeAbbr,
  ConditionalContent,
  AppRuntimeFirst,
  PartialLoader,
  ConceptsSfVsFullHeader,
  SmallFootprintComparison,
  ConceptsProductModelHeader,
  ConceptsProductModelImage,
  OpsManager,
  CompanyName,
  AsgNote,
  AppSecGroupsLink,
  ContainerNetworkLink,
  AppSecGroupsDefault,
  PlatformName,
  OrAppsMan,
  BillingManagerRoleNote,
  BillingManagerRole,
  AdminRole,
  AdminReadOnlyRole,
  ManageIsoSegLink,
  ConsoleLinks,
  IpsecNote,
  ComplianceLinks,
  AppSvcLinks,
  CFNetworking,
  GlobalAuditorRole,
  RecommendedBy,
  APIEndpoint,
  SSL,
  AppDomain,
  ...CustomComponents,
};
