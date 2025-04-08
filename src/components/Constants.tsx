import type {ReactNode} from 'react';
import CodeBlock from '@theme/CodeBlock';
import {config} from '@site/config'
import React from 'react';

export function AppDomain(): ReactNode {
    return (
      "shared-domain.example.com"
    );
}

export function BookTitle(): ReactNode {
  return "Cloud Foundry Documentation";
}

export function BookTitleShort(): ReactNode {
  return "Cloud Foundry Docs";
}

export function Title(): ReactNode {
  return "Cloud Foundry Documentation";
}

export function TitleImage(): ReactNode {
  return "../images/logo_org.png";
}

export function hero_text(): ReactNode {
  return "Documentation to help you deploy and manage Cloud Foundry";
}

export function url_path(): ReactNode {
  return "https://docs.cloudfoundry.org";
}

export function product_link(): ReactNode {
  return <></>;
}

export function product_url(): ReactNode {
  return "https://github.com/cloudfoundry/cf-release";
}

export function support_link(): ReactNode {
  return '<a href="https://www.cloudfoundry.org/community/" target="_blank">Get Involved</a>';
}

export function support_call_to_action(): ReactNode {
  return '<a href="https://www.cloudfoundry.org/community/" target="_blank">Get Involved</a>';
}

export function support_url(): ReactNode {
  return "https://www.cloudfoundry.org/community/";
}

export function gtm_account_id(): ReactNode {
  return "GTM-MM86KCJ";
}

export function PlatformName(): ReactNode {
  return <>Cloud Foundry</>;
}

export function platform_old(): ReactNode {
  return "Cloud Foundry";
}

export function PlatformCode(): String {
  return "CF";
}

export function product_code(): ReactNode {
  return "CF";
}

export function product_name_lc(): ReactNode {
  return "cf";
}

export function AppRuntimeFirst(): ReactNode {
  return "Cloud Foundry";
}

export function app_runtime_full(): ReactNode {
  return "Cloud Foundry";
}

export function app_runtime(): ReactNode {
  return "Cloud Foundry";
}

export function AppRuntimeAbbr(): ReactNode {
  return "CF";
}

export function app_runtime_abbr_lc(): ReactNode {
  return "cf";
}

export function k8s_runtime_first(): ReactNode {
  return "Cloud Foundry";
}

export function k8s_runtime_full(): ReactNode {
  return "Cloud Foundry";
}

export function k8s_runtime(): ReactNode {
  return "Cloud Foundry";
}

export function k8s_runtime_abbr(): ReactNode {
  return "Cloud Foundry";
}

export function windows_runtime_first(): ReactNode {
  return "Cloud Foundry";
}

export function windows_runtime_full(): ReactNode {
  return "Cloud Foundry";
}

export function windows_runtime(): ReactNode {
  return "Cloud Foundry";
}

export function windows_runtime_abbr(): ReactNode {
  return "CF";
}

export function CompanyName(): ReactNode {
  return "Cloud Foundry";
}

export function current_major_version(): ReactNode {
  return "4-0";
}

export function product_name(): ReactNode {
  return "Cloud Foundry";
}

export function product_runtime(): ReactNode {
  return "Cloud Foundry";
}

export function product_short(): ReactNode {
  return "Cloud Foundry";
}

export function add_volumes_link(): ReactNode {
  return "For more information, see [Adding Volume Services to your Deployment](../../running/deploy-vol-services.html).";
}

export function AdminReadOnlyRole(): ReactNode {
  return <><ul><li>**Admin Read-Only**: Read-only access to all Cloud Controller API resources. Assigned the `cloud_controller.admin_read_only` scope in UAA.</li></ul></>;
}

export function AdminRole(): ReactNode {
  return <><ul><li>**Admin**: Perform operational actions on all orgs and spaces using the Cloud Controller API. Assigned the `cloud_controller.admin` scope in UAA.</li></ul></>;
}

export function admin(): ReactNode {
  return "Cloud Foundry administrator";
}

export function api_endpoint_book(): ReactNode {
  return "For more information, see [Identifying your Cloud Foundry API Endpoint and Version](http://docs.cloudfoundry.org/running/cf-api-endpoint.html).";
}

export function APIEndpoint(): ReactNode {
  return <><a href="http://docs.cloudfoundry.org/running/cf-api-endpoint.html">the URL of the Cloud Controller in your Cloud Foundry instance</a></>;
}

export function api_v1_format(): ReactNode {
  return '<a href="http://docs.cloudfoundry.org/services/api-v1.html">v1 format</a>';
}

export function api_v2_format(): ReactNode {
  return '<a href="http://docs.cloudfoundry.org/services/api.html">v2 format</a>';
}

export function api_version(): ReactNode {
  return "To determine your Cloud Controller API version, see [Identifying your Cloud Foundry API Endpoint and Version](http://docs.cloudfoundry.org/running/cf-api-endpoint.html).";
}

export function app_domain(): ReactNode {
  return "shared-domain.example.com";
}

export function app_healthcheck_timeout(): ReactNode {
  return "In Cloud Foundry, the default timeout is 60 seconds and the default maximum configurable timeout is 180 seconds. Your Cloud Foundry operator can set other values for these defaults.";
}

export function app_logging_footnote(): ReactNode {
  return '<a href="https://docs.cloudfoundry.org/devguide/deploy-apps/streaming-logs.html">App Logging in Cloud Foundry</a>';
}

export function app_sec_group_desc(): ReactNode {
  return "`description`   |This is an optional field that contains useful text for operators to manage security group rules. This field is available in Cloud Foundry v238 and later.";
}

export function AppSecGroupsDefault(): ReactNode {
  return <>Only allowing outbound connections to public addresses from app containers. This is the original default. Admins can change this behavior by configuring ASGs.</>;
}

export function AppSecGroupsLink(): ReactNode {
  return <>For more information about ASGs, see [App Security Groups](../adminguide/app-sec-groups.html)</>;
}

export function app_sec_groups(): ReactNode {
  return '<a href="http://docs.cloudfoundry.org/concepts/asg.html">App Security Groups</a>';
}

export function asg_notifications_prereq(): ReactNode {
  return <></>;
}

export function AsgNote(): ReactNode {
  return <></>;
}

export function az(): ReactNode {
  return "availability zones";
}

export function azs(): ReactNode {
  return <></>;
}

export function OpsManager(): ReactNode {
  return <></>;
}

export function azure_deploy(): ReactNode {
  return "For more information, see [Preparing to Deploy on Azure](../../deploying/azure/index.html).";
}

export function bbr_ert(): ReactNode {
  return <></>;
}

export function bbr_space(): ReactNode {
  return <></>;
}

export function bbr_rn_intro(): ReactNode {
  return <></>;
}

export function bbr_rn_compatibility(): ReactNode {
  return <></>;
}

export function BillingManagerRoleNote(): ReactNode {
  return <>::: info The Billing Manager role is only relevant for Cloud Foundry environments deployed with a billing engine.:::</>;
}

export function BillingManagerRole(): ReactNode {
  return <><ul><li>**Org Billing Managers**: Create and manage billing account and payment information.</li></ul></>;
}

export function blobstore_kb(): ReactNode {
  return <></>;
}

export function buildpacks_link(): ReactNode {
  return '<a href="https://docs.cloudfoundry.org/buildpacks/index.html">Buildpacks</a>';
}

export function cc_logging_default(): ReactNode {
  return "::: info By default, Cloud Foundry does not enable Cloud Controller request logging. To enable this feature, you must set the `cc.security_event_logging.enabled` property in your Cloud Foundry manifest to `true` and redeploy.:::";
}

export function cfdot_kb(): ReactNode {
  return "When logged into a VM hosting an app, you can use tools like the Cloud Foundry Diego Operator Toolkit (cfdot) to run app status diagnostics. For more information, see the [cfdot](https://github.com/cloudfoundry/cfdot) repository on GitHub and the [cfdot CLI](https://docs.cloudfoundry.org/running/monitoring-test.html#cfdot) section of the _Monitoring and Testing Diego Components_ topic.";
}

export function cipher_suites(): ReactNode {
  return "You can override the default cipher suites by changing the `router.cipher_suites` and `router.min_tls_version` BOSH manifest properties.";
}

export function cli_download(): ReactNode {
  return "https://github.com/cloudfoundry/cli#downloads";
}

export function cli_v6(): ReactNode {
  return '<a href="http://docs.cloudfoundry.org/cf-cli/getting-started.html">Getting Started with the cf CLI</a>';
}

export function cloud_controller_dea_agent(): ReactNode {
  return <></>;
}

export function cloud_controller_dea_algorithm(): ReactNode {
  return <></>;
}

export function cloud_controller_logging(): ReactNode {
  return "For more information about how Cloud Foundry aggregates and streams logs and metrics, see [Overview of Logging and Metrics](../../loggregator/data-sources.html).";
}

export function collector_singleton(): ReactNode {
  return "The singleton Collector and Compilation components do not affect platform availability.";
}

export function ConceptsSfVsFullHeader(): ReactNode {
  return <></>;
}

export function ConceptsProductModelHeader(): ReactNode {
  return <></>;
}

export function ConceptsProductModelImage(): ReactNode {
  return <></>;
}

export function SmallFootprintComparison(): ReactNode {
  return <></>;
}

export function concepts_product_model_text(): ReactNode {
  return "./overview_model";
}

export function console_2(): ReactNode {
  return "If you have a Cloud Foundry account, see [Identifying your Cloud Foundry API Endpoint and Version](http://docs.cloudfoundry.org/running/cf-api-endpoint.html) to determine the URL of the Cloud Controller in your Cloud Foundry instance. Click **Manage Cloud...** to add this URL to your Cloud Foundry account. Validate the account and continue through the wizard.";
}

export function ConsoleLinks(): ReactNode {
  return <></>;
}

export function contact_support(): ReactNode {
  return <></>;
}

export function container_metrics(): ReactNode {
  return "This property is set to true by default in your [BOSH release](https://github.com/cloudfoundry/cf-syslog-drain-release/blob/v6.x/jobs/adapter/spec#L61-L66).<br><br><br>  Once `scalablesyslog.adapter.metrics_to_syslog_enabled` is set to `true`, run the following cf CLI command to include container metrics in your syslog drain:<pre>cf drain APP-NAME DRAIN-URL --type metrics --drain-name YOUR-SYSLOG-DRAIN</pre>Where:<br> <ul><li>`APP-NAME` is your app name.</li> <li>`YOUR-SYSLOG-DRAIN` is the name of your syslog drain.</li><li>`DRAIN-URL` is the URL of your syslog drain.</li></ul>";
}

export function ContainerNetworkLink(): ReactNode {
  return <>For information about administering container-to-container network policies, see <a href="../devguide/deploy-apps/cf-networking.html">Configuring Container-to-Container Networking</a></>;
}

export function cookies_shared_domain_1(): ReactNode {
  return <></>;
}

export function cookies_shared_domain_2(): ReactNode {
  return "For an app using a shared domain such as `example.com`, a cookie set to use the highest domain has a `Domain` attribute of `.example.com` in its HTTP response header.";
}

export function credhub_link(): ReactNode {
  return '<a href="https://docs.cloudfoundry.org/credhub/index.html">CredHub</a>';
}

export function cse_id(): ReactNode {
  return "005804290371689664731:9jhxguhn8dy";
}

export function custom_load_balancer(): ReactNode {
  return <></>;
}

export function custom_services(): ReactNode {
  return 'If you are interested in building services for Cloud Foundry and making them available to end users, see <a href="http://docs.cloudfoundry.org/services/index.html">Services</a>.';
}

export function custom_stack_nav_link(): ReactNode {
  return '* <a href="/running/custom-stack.html" class="subnav">Adding a Custom Stack</a><br />';
}

export function custom_stack(): ReactNode {
  return "You can also build your own custom stack. For more information, see [Adding a Custom Stack](../../running/custom-stack.html).";
}

export function dea_diego_table_row(): ReactNode {
  return <></>;
}

export function dea_diego_version(): ReactNode {
  return "Diego architecture";
}

export function DefaultASGs(): ReactNode {
  return(
    <><h3>Default ASGs</h3>
      Cloud Foundry preconfigures two ASGs: `public_networks` and `dns`.

      Unless you modify these before your initial deployment, these ASGs are applied by default to all containers in your deployment.

      * `public_networks`: This group allows access to public networks, and blocks access to private networks and link local addresses. Cloud
      Foundry blocks outgoing traffic to the following IP address ranges by specifically allowing traffic to all other addresses:
      * 10.0.0.0 - 10.255.255.255
      * 169.254.0.0 - 169.254.255.255
      * 172.16.0.0 - 172.31.255.255
      * 192.168.0.0 - 192.168.255.255

      * `dns`: This group allows access to DNS on port 53 for any IP address. The default ASGs are defined in the `cf-deployment.yml` file as follows:

      <CodeBlock>
        security_group_definitions:<br/>
        - name: public_networks<br/>
        rules:<br/>
        - destination: 0.0.0.0-9.255.255.255<br/>
        protocol: all<br/>
        - destination: 11.0.0.0-169.253.255.255<br/>
        protocol: all<br/>
        - destination: 169.255.0.0-172.15.255.255<br/>
        protocol: all<br/>
        - destination: 172.32.0.0-192.167.255.255<br/>
        protocol: all<br/>
        - destination: 192.169.0.0-255.255.255.255<br/>
        protocol: all<br/>
        - name: dns<br/>
        rules:<br/>
        - destination: 0.0.0.0/0<br/>
        ports: '53'<br/>
        protocol: tcp<br/>
        - destination: 0.0.0.0/0<br/>
        ports: '53'<br/>
        protocol: udp<br/>
      </CodeBlock>

      Modify the default ASGs to block outbound traffic as necessary for your installation. To see how the ASGs are defined by
      default, see the <a href="https://github.com/cloudfoundry/cf-deployment/blob/main/cf-deployment.yml#L604-L627">cf-deployment.yml</a> file on GitHub.
    </>
  );
}

export function dev_console_1(): ReactNode {
  return <></>;
}

export function dev_console_2(): ReactNode {
  return "CLI";
}

export function dev_console_3(): ReactNode {
  return <></>;
}

export function dev_console_4(): ReactNode {
  return <></>;
}

export function dev_console_5(): ReactNode {
  return <></>;
}

export function dev_console_note(): ReactNode {
  return <></>;
}

export function diego_architecture(): ReactNode {
  return "This topic provides an overview of the structure and components of Diego, the container management system for Cloud Foundry.";
}

export function diego_deploy(): ReactNode {
  return "To deploy Diego, see the [Cloud Foundry Diego (BOSH release)](https://github.com/cloudfoundry-incubator/diego-release) repository on GitHub.";
}

export function diego_ssh_link(): ReactNode {
  return '<a href="../diego/ssh-conceptual.html">Diego SSH package</a>';
}

export function disable_custom_buildpacks_note(): ReactNode {
  return "Operators can choose to disable custom buildpacks in an entire deployment. For more information, see the [Disabling Custom Buildpacks](../adminguide/buildpacks.html#disabling-custom-buildpacks) section of the _Managing Custom Buildpacks_ topic.";
}

export function disable_custom_buildpacks(): ReactNode {
  return "You can disable custom buildpacks for an entire deployment by adding `disable_custom_buildpacks<span>:</span> true` in your Cloud Foundry manifest under `properties.cc`.";
}

export function disable_custom(): ReactNode {
  return "<h2> <a id='disabling-custom-buildpacks'></a>Disabling Custom Buildpacks </h2> Operators can choose to disable custom buildpacks. For more information, see the [Disabling Custom Buildpacks](../adminguide/buildpacks.html#disabling-custom-buildpacks) section of the _Managing Custom Buildpacks_ topic.";
}

export function docker_auth(): ReactNode {
  return "To run Docker containers, Cloud Foundry needs the ability to access Docker registries using a Certificate Authority. To configure this access, see [Installing Certificates on VMs](ttps://bosh.io/docs/trusted-certs.html) in the BOSH documentation.";
}

export function domain_name(): ReactNode {
  return "cloudfoundry.org";
}

export function domains_shared_domains(): ReactNode {
  return <></>;
}

export function ecr_support_cf_12_1(): ReactNode {
  return ":::This feature is only available in `cf-deployment` v12.1.0 and later.</p>";
}

export function email_notifications(): ReactNode {
  return <></>;
}

export function enable_c2c_discovery(): ReactNode {
  return "include the [`enable\_service\_discovery`](https://github.com/cloudfoundry/cf-deployment/blob/master/operations/enable-service-discovery.yml) ops file in your Cloud Foundry deployment, as described in [CF App Service Discovery](https://github.com/cloudfoundry/cf-networking-release/blob/develop/docs/05-service-discovery.md) in the cf-networking-release repository on GitHub";
}

export function enable_syslog_drain(): ReactNode {
  return "For more information, see [Configuring System Logging](../running/managing-cf/logging-config.html) and [Using Log Management Services](../devguide/services/log-management.html).";
}

export function enable_syslog_forwarding_link(): ReactNode {
  return '::: info For this procedure to work, you must enable system log forwarding. For more information, see the <a href="https://docs.cloudfoundry.org/running/managing-cf/logging-config.html#syslog-forward">Enabling System Log Forwarding</a> section of the <em>Configuring System Logging</em> topic.:::';
}

export function encryption_key(): ReactNode {
  return "encryption_key_2023_02_20";
}

export function example_domain_edu(): ReactNode {
  return "www.example.edu";
}

export function example_domain_net(): ReactNode {
  return "www.example.net";
}

export function example_domain_no_www(): ReactNode {
  return ".example.com";
}

export function example_domain_org(): ReactNode {
  return "www.example.org";
}

export function example_domain(): ReactNode {
  return "www.example.com";
}

export function example_ip_1(): ReactNode {
  return "192.0.2.1";
}

export function example_ip_2(): ReactNode {
  return "198.51.100.1";
}

export function example_ip_3(): ReactNode {
  return "203.0.113.1";
}

export function external_ips(): ReactNode {
  return "external IP addresses";
}

export function external_vol_smb_note(): ReactNode {
  return <></>;
}

export function external_vol_win_note(): ReactNode {
  return "::: info NFS and SMB volume services are available for Linux cells only. These services are not available for Windows cells.:::";
}

export function ga_account_id(): ReactNode {
  return "UA-22181585-2";
}

export function gen_GSG(): ReactNode {
  return <></>;
}

export function GlobalAuditorRole(): ReactNode {
  return <><ul><li>**Global Auditor**: Read-only access to all Cloud Controller API resources except for secrets, such as environment variables. The Global Auditor role cannot access those values. Assigned the `cloud_controller.global_auditor` scope in UAA.</li></ul></>;
}

export function grant_devs_c2c(): ReactNode {
  return "edit your BOSH manifest to include the `enable_space_developer_self_service` property in the [cf-networking-release policy-server job](https://github.com/cloudfoundry/cf-networking-release/blob/master/jobs/policy-server/spec) and set that property to `true`";
}

export function health_monitor_footnote(): ReactNode {
  return '<a href="https://docs.cloudfoundry.org/running/hm-notifications.html">Configuring Health Monitor Notifications</a>';
}

export function http2_admin_link(): ReactNode {
  return 'For information about configuring support for HTTP/2 in Cloud Foundry, see <a href="https://docs.cloudfoundry.org/adminguide/supporting-http2.html">Configuring HTTP/2 Support</a>.';
}

export function http2_support_version(): ReactNode {
  return "In routing-release v0.224.0 and later, HTTP/2 support is enabled by default.";
}

export function http_routing(): ReactNode {
  return "For more information, see [Securing Traffic into Cloud Foundry](../adminguide/securing-traffic.html).";
}

export function healthcheck_duration(): ReactNode {
  return "The duration of the health check Service Unavailable response is configurable using the manifest property `router.requested_route_registration_interval_in_seconds`, which defaults to 20 seconds.";
}

export function info_loc(): ReactNode {
  return "In your Cloud Foundry deployment manifest";
}

export function IpsecNote(): ReactNode {
  return <></>;
}

export function keepalive(): ReactNode {
  return "For more information, see [Gorouter Back End Keep-Alive Connections](../adminguide/routing-keepalive.html).";
}

export function keepalive_router(): ReactNode {
  return "An operator can enable the feature by configuring a non-zero value for the manifest property `router.max_idle_connections`.";
}

export function known_issues(): ReactNode {
  return '<a href="http://docs.cloudfoundry.org/running/troubleshooting.html">Troubleshooting Cloud Foundry</a>';
}

export function lb_health_chk_healthy(): ReactNode {
  return "`router.drain_wait`";
}

export function lb_health_chk_unhealthy(): ReactNode {
  return "`router.load_balancer_healthy_threshold`";
}

export function link_adminguide_buildpack(): ReactNode {
  return "For more information, see [Managing Custom Buildpacks](../adminguide/buildpacks.html).";
}

export function link_adminguide_commands(): ReactNode {
  return ':::An Org Manager needs explicit admin permissions to perform certain actions. To create a user with admin rights, see <a href="../uaa/uaa-user-management.html">Creating and Managing Users with the UAA CLI (UAAC)</a>.:::';
}

export function link_adminguide_domains(): ReactNode {
  return "For admin-specific commands, see [Managing Domains and Routes](../../adminguide/manage-domains-routes.html).";
}

export function link_configure_trusted_certificates(): ReactNode {
  return "For information about providing trusted certificates to applications running on Cloud Foundry, see [Configuring Trusted System Certificates for Applications](../../running/trusted-system-certificates.html).";
}

export function log_management(): ReactNode {
  return <></>;
}

export function logg_forwarding(): ReactNode {
  return "the [Enabling System Log Forwarding](../running/managing-cf/logging-config.html#syslog-forward) section of the _Configuring System Logging_ topic.";
}

export function logg_scaling(): ReactNode {
  return '<a href="../running/managing-cf/logging-config.html#scaling">Scaling Loggregator</a> section of the <em>Configuring System Logging</em> topic.';
}

export function loggregator_arch_link(): ReactNode {
  return '<a href="https://docs.cloudfoundry.org/loggregator/architecture.html">Loggregator Architecture</a>';
}

export function loggregator_firehose_link(): ReactNode {
  return '<a href="../../loggregator/architecture.html">Loggregator Architecture</a>';
}

export function loggregator_log_cache_link(): ReactNode {
  return <></>;
}

export function loggregator_log_cache_link_syslog_scale(): ReactNode {
  return "For guidance on scaling, see the [README](https://github.com/cloudfoundry/cf-syslog-drain-release/blob/master/README.md) for the CF Syslog Drain Release repository on GitHub.";
}

export function ManageIsoSegLink(): ReactNode {
  return <>For information about how to create and manage isolation segments in a Cloud Foundry deployment, see [Managing Isolation Segments](../adminguide/isolation-segments.html).</>;
}

export function manifest_vs_cli_asg(): ReactNode {
  return "You may also define ASGs in your Cloud Foundry deployment manifest, but these definitions only create security groups during first-time installation. To avoid confusion, any such definitions in the manifest should be generic. The cf CLI commands `create-security-group` and `bind-security-group` overwrite ASG definitions from the manifest. Upgrading Cloud Foundry retains ASG definitions made from the CLI and ignores any ASG definitions in the newer manifest.";
}

export function max_app_size_table(): ReactNode {
  return "Set in the `cc.packages.max_package_size` in the manifest";
}

export function max_app_size(): ReactNode {
  return "the maximum app file size set in the `cc.packages.max_package_size` property in the manifest";
}

export function max_healthcheck_timeout(): ReactNode {
  return "`cc.maximum_health_check_timeout` defaults to the maximum of `180` seconds, but your Cloud Foundry operator can set it to a different value.";
}

export function max_in_flight_header(): ReactNode {
  return "<h3>Setting `max_in_flight` values</h3>";
}

export function max_in_flight_config(): ReactNode {
  return "For more information, see the [Update Block](https://bosh.io/docs/deployment-manifest.html#update) section of the _Deployment Manifest v1_ topic in the BOSH documentation.";
}

export function mutual_tls_tcp(): ReactNode {
  return "<::: info If you have mutual TLS app identity verification enabled, you must also enable support for TLS backends with TCP Router via the `tcp_router.backend_tls.enabled` property, and on Route Emitter via the `tcp.enable_tls` property.:::";
}

export function net_traffic_rules(): ReactNode {
  return '<a href="http://docs.cloudfoundry.org/concepts/asg.html">network traffic rules</a>';
}

export function notifications_api_1(): ReactNode {
  return "For more information about the Notifications Service, see the Notifications API [v1](https://github.com/cloudfoundry-incubator/notifications/blob/master/V1_API.md) or [v2](https://github.com/cloudfoundry-incubator/notifications/blob/master/V2_API.md) documentation.";
}

export function notifications_link(): ReactNode {
  return '<a href="../../adminguide/notifications.html">Notification Service</a>';
}

export function om_resurrector_header(): ReactNode {
  return <></>;
}

export function om_resurrector_text(): ReactNode {
  return <></>;
}

export function OrAppsMan(): ReactNode {
  return <></>;
}

export function or_apps_man2(): ReactNode {
  return <></>;
}

export function per_route_lb_version(): ReactNode {
  return "Available from cf-deployment v48.1.0, together with CF CLI 8.10.0 and later.";
}

export function platform_ssh_configuration(): ReactNode {
  return "Cloud Foundry deployments control SSH access to apps at the Cloud Foundry level. Additionally, Cloud Foundry supports load balancing of SSH sessions. For more information about setting SSH access for your deployment, see [Configuring SSH Access](../../running/config-ssh.html).";
}

export function pools_link(): ReactNode {
  return '<a href="https://bosh.io/docs/deployment-basics/">Building a Manifest</a> in the BOSH documentation.';
}

export function port_limitations(): ReactNode {
  return "To support WebSockets, the operator must configure the load balancer correctly. Depending on the configuration, clients may have to use a different port for WebSocket connections, such as port 4443, or a different domain name. For more information, see [Supporting WebSockets](../../adminguide/supporting-websockets.html).";
}

export function port_limitations_1(): ReactNode {
  return "To support WebSockets, the operator must configure the load balancer correctly. Depending on the configuration, clients may have to use a different port for WebSocket connections, such as port 4443, or a different domain name. For more information, see [Supporting WebSockets](../adminguide/supporting-websockets.html).";
}

export function private_app_domain(): ReactNode {
  return "private-domain.example.com";
}

export function public_host(): ReactNode {
  return "docs.cloudfoundry.org";
}

export function pw_policy(): ReactNode {
  return <></>;
}

export function python_cf245only(): ReactNode {
  return '**<a href="https://www.pivotaltracker.com/n/projects/966314/stories/132190561">Required</a> for Cloud Foundry v245 only:**';
}

export function quota_resource(): ReactNode {
  return "quota space";
}

export function RecommendedBy(): ReactNode {
  return "Cloud Foundry";
}

export function resurrector(): ReactNode {
  return "For more information about the Resurrector, see [Auto-healing Capabilities](https://bosh.io/docs/resurrector.html) in the BOSH documentation.";
}

export function roles_table(): ReactNode {
  return "_oss_roles_table";
}

export function rotated_key(): ReactNode {
  return "encryption_key_2023_02_21";
}

export function open_service_broker_api(): ReactNode {
  return "../open-service-broker/spec";
}

export function open_service_broker_api_profile(): ReactNode {
  return "../open-service-broker/profile";
}

export function open_service_broker_rn(): ReactNode {
  return "../open-service-broker/release-notes";
}

export function route_services_apps_manager(): ReactNode {
  return <></>;
}

export function route_services_config(): ReactNode {
  return '<h2><a id="enabling-route-services-in-cloudfoundry"></a>Enabling Route Services in Cloud Foundry </h2>To enable support for route services in a Cloud Foundry deployment, the operator must provide a passphrase used by the Gorouter to encrypt a header that is sent with the request to the route service. The Gorouter uses this header to validate the request sent by the route service to the app route. The passphrase is configured in the cf-release manifest.<br><pre>`properties<span>:</span><br> router<span>:</span><br>  route\_services\_secret<span>:</span> YOUR-SECRET-PASSPHRASE`</pre>::: info The `route\_services\_secret` property should be a robust passphrase. For more information, see the <a href="https://github.com/cloudfoundry-incubator/routing-release/blob/master/jobs/gorouter/spec">Gorouter spec</a> in the cf-release repository on GitHub.:::Route service instances should send requests to the value of `x-cf-forwarded-url`, obeying the scheme. The scheme is `https` by default. For environments that do not support TLS termination, this property can be set to false.<pre>`properties<span>:</span><br> router<span>:</span><br>   route\_services\_recommend\_https<span>:</span> true`</pre>The Gorouter only forwards requests to route services over SSL. By default, certificates provided by route services must be signed by a trusted CA. If they are not, the Gorouter rejects the request. In development environments, this concern may be unreasonable. To disable SSL certificate validation, modify the following property<span>:</span><br><pre>`properties<span>:</span><br>  router<span>:</span><br>    ssl\_skip\_validation<span>:</span> true`</pre>';
}

export function RouteServicesEnabling(): ReactNode {
  return(
    <div>
      <h2>Enabling route services in Cloud Foundry</h2>

      To begin support for route services in a Cloud Foundry deployment, you
      must provide a passphrase used by the Gorouter to encrypt a header that is sent with
      the request to the route service.
      The Gorouter uses this header to validate the request sent by the route service to the app route.
      The passphrase is configured in the cf-release manifest.

      ```
      properties
        router:
          route_services_secret: YOUR-SECRET-PASSPHRASE
      ```

      <p> The `route_services_secret` property can
        be a robust passphrase.</p>

        <p>For more information, see the
        <a href="https://github.com/cloudfoundry-incubator/routing-release/blob/master/jobs/gorouter/spec">Gorouter spec</a>
        in the cf-release repository on GitHub.
      </p>

      Route service instances can send requests to the value of `x-cf-forwarded-url`, obeying the scheme.
      The scheme is `https` by default.
      For environments that do not support TLS termination, this property can be set to false.

      ```
      properties:
        router:
          route_services_recommend_https: true
      ```

      The Gorouter only forwards requests to route services over SSL.
      By default, certificates provided by route services must be signed by a trusted CA.
      If they are not, the Gorouter rejects the request.
      In development environments, this concern might be unreasonable.
      To deactivate SSL certificate validation, edit the following property:

      ```
      properties:
        router:
          ssl_skip_validation: true
      ```
    </div>
  );
}

export function route_services_link(): ReactNode {
  return '<a href="../devguide/services/route-binding.html">Manage App Requests with Route Services</a>';
}

export function route_services_require_diego(): ReactNode {
  return "<p> Route services require Diego. Your deployment must use the Diego architecture or you must enable Diego for your app.</p>";
}

export function route_services_securing_traffic(): ReactNode {
  return "For more information about securing traffic into Cloud Foundry, see [Securing Traffic into Cloud Foundry](../adminguide/securing-traffic.html).";
}

export function route_services(): ReactNode {
  return '<p class="note"><span class="note__title">**Note**</span> Route services require Diego. Your deployment must use the Diego architecture or you must enable Diego for your app.</p>';
}

export function saml_provider(): ReactNode {
  return "Retrieve the name of your SAML provider by opening your Cloud Foundry manifest and recording the value of the `login.saml.providers.provider-name` property.";
}

export function scale_table(): ReactNode {
  return "oss_scale_table";
}

export function scaling_ert_db(): ReactNode {
  return <></>;
}

export function scaling_ert(): ReactNode {
  return <></>;
}

export function self_signed(): ReactNode {
  return "Before following the procedure below, the developer must obtain either the self-signed certificate or the intermediate and CA certificates used to sign the deployment's certificate. The developer can obtain these certificates from the Cloud Foundry operator or from the deployment manifest. For more information about how to retrieve certificates from the deployment manifest, see [Securing Traffic into Cloud Foundry](../adminguide/securing-traffic.html).";
}

export function services(): ReactNode {
  return '<a href="http://docs.cloudfoundry.org/services/index.html">services</a>';
}

export function ssh_marketplace_output(): ReactNode {
  return "mysql  100mb MySQL databases on demand";
}

export function ssh_marketplace_step(): ReactNode {
  return "Run `cf marketplace` to list the marketplace services available.";
}

export function ssh_service_access_key(): ReactNode {
  return '<br>{<br>"hostname"<span>:</span> "us-cdbr-iron-east-01.mysql.net",<br>"jdbcUrl"<span>:</span> "jdbc:mysql://us-cdbr-iron-east-03.mysql.net/ad\_b2fca6t49704585d?user=b5136e448be920\u0026password=231f435o05",<br>"name"<span>:</span> "ad\_b2fca6t49704585d",<br>"password"<span>:</span> "231f435o05",<br>"port"<span>:</span> "3306",<br>"uri"<span>:</span> "mysql://b5136e448be920:<span>231f435o05<span>@</span>us-cdbr-iron-east-03.mysql.net</span>:3306/ad\_b2fca6t49704585d?reconnect=true",<br>"username"<span>:</span> "b5136e448be920"<br>}<br>';
}

export function ssh_service_host(): ReactNode {
  return "us-cdbr-iron-east-01.mysql.net";
}

export function ssh_service_plan(): ReactNode {
  return "100mb";
}

export function ssh_service(): ReactNode {
  return "MySQL";
}

export function SSL(): ReactNode {
  return <></>;
}

export function setting_rate_limit_cloud_api(): ReactNode {
  return '<li><a href="../running/setting-rate-limit-cloud-api.html" class="subnav">Setting the Rate Limit for the Cloud Controller API</a></li>';
}

export function starting_container_count_maximum(): ReactNode {
  return "For information about how to configure this setting, see [Configuring Diego for Upgrades](../running/diego-upgrades.html).";
}

export function suspended_roles_table(): ReactNode {
  return "_suspended_org_roles_table";
}

export function syslog_forwarding_ref(): ReactNode {
  return 'Syslog forwarding. See <a href="https://docs.cloudfoundry.org/devguide/services/log-management.html">Streaming App Logs to Log Management Services</a>.';
}

export function tcp_iaas(): ReactNode {
  return "Configure these IPs as your static IPs in your deployment manifest.";
}

export function tcp_port_review(): ReactNode {
  return <></>;
}

export function tcp_port(): ReactNode {
  return "../adminguide/tcp_modify_ports";
}

export function uaa_cli(): ReactNode {
  return "For more information, see [Creating and Managing Users with the UAA CLI (UAAC)](../../uaa/uaa-user-management.html) and [Orgs, Spaces, Roles, and Permissions](../../concepts/roles.html).";
}

export function uaa_cred(): ReactNode {
  return "see the `uaa scim` section";
}

export function uaa(): ReactNode {
  return '<a href="http://docs.cloudfoundry.org/adminguide/notifications.html">UAA</a>';
}

export function understanding_asg_individual_link(): ReactNode {
  return "the [Create ASGs](https://docs.cloudfoundry.org/concepts/asg.html#asg-individual) section of the _App Security Groups_";
}

export function upload_custom_buildpacks(): ReactNode {
  return "You can also use the `cf create-buildpack` command to upload the buildpack into your deployment, making it accessible without the `-b`. Run flag&#58; <pre>cf create-buildpack BUILDPACK PATH POSITION</pre> <p>Where flag&#58;</p> <ul><li>`BUILDPACK` specifies the buildpack name.</li><li>`PATH` specifies the location of the buildpack. `PATH` can point to a ZIP file, the URL of a ZIP file, or a local directory.</li><li>`POSITION` specifies where to place the buildpack in the detection priority list.</li></ul>";
}

export function user_org_creation(): ReactNode {
  return <></>;
}

export function v3_cli_versions(): ReactNode {
  return "The experimental commands described in this topic require the cf CLI v6.32.0 or later and a Cloud Foundry deployment with Cloud Controller API v3.27.0 or later.";
}

export function warden_garden(): ReactNode {
  return <></>;
}

export function zipkin_enable(): ReactNode {
  return "zipkin_oss_config";
}

export function zipkin_enable_link(): ReactNode {
  return "<p>When Zipkin tracing is enabled in Cloud Foundry, the Gorouter examines the HTTP request headers and performs:</p>";
}

export function w3c_enable_link(): ReactNode {
  return "<p>When W3C tracing is enabled in Cloud Foundry, the Gorouter examines the HTTP request headers and performs:</p>";
}

export function ssl_gorouter_link(): ReactNode {
  return '<a href="#gorouter_term">Terminating SSL/TLS at the Gorouter only</a>';
}

export function ssl_lb_gorouter_link(): ReactNode {
  return '<a href="#lb_and_gorouter_term">Terminating SSL/TLS at the Load Balancer and the Gorouter</a>';
}

export function ssl_lb_link(): ReactNode {
  return '<a href="#lb_term">Terminating SSL/TLS at the Load Balancer Only</a>';
}

export function ssl_haproxy(): ReactNode {
  return <></>;
}

export function tasks_ai(): ReactNode {
  return <></>;
}

export function CFNetworking(): ReactNode {
  return <>For more information about how to enable and use container-to-container networking, see [Configuring Container-to-Container Networking](../devguide/deploy-apps/cf-networking.html).<p>When the container-to-container networking feature is disabled, all app-to-app traffic must go through the Gorouter.</p></>;
}

export function isolation_segments_create(): ReactNode {
  return <></>;
}

export function install_isolation_segments(): ReactNode {
  return "For more information about creating isolation segments, see [Managing Isolation Segments](isolation-segments.html).";
}

export function isolation_segments_note(): ReactNode {
  return "::: info The isolation segment name used in the cf CLI command must match the value specified in the `placement_tags` section of the Diego manifest file. If the names do not match, Cloud Foundry fails to place apps in the isolation segment when apps are started or restarted in the space assigned to the isolation segment.:::";
}

export function config_ssh_link(): ReactNode {
  return 'For more information, see <a href="../../running/config-ssh.html">Configuring SSH Access for Cloud Foundry</a>.';
}

export function all_metrics_links(): ReactNode {
  return '<ul><li><a href="../running/all_metrics.html">Cloud Foundry Component Metrics</a></li></ul>';
}

export function ha_ert(): ReactNode {
  return <></>;
}

export function ComplianceLinks(): ReactNode {
  return <></>;
}

export function AppSvcLinks(): ReactNode {
  return <></>;
}

export function route_services_appsman1(): ReactNode {
  return <></>;
}

export function route_services_appsman2(): ReactNode {
  return <></>;
}

export function user_provided_apps_man(): ReactNode {
  return <></>;
}

export function xfcc_always_forward(): ReactNode {
  return "This mode is enabled by default or when `router.forwarded_client_cert<span>:</span> always_forward`.";
}

export function xfcc_mtls_forward(): ReactNode {
  return "This mode is enabled when `router.forwarded_client_cert<span>:</span> forward`.";
}

export function xfcc_strip(): ReactNode {
  return "This mode is enabled when `router.forwarded_client_cert<span>:</span> sanitize_set`.";
}

export function gorouter_sni(): ReactNode {
  return "<li>The Gorouter supports SNI and can be configured with multiple certificates, each which may optionally include wildcard and alternative names.";
}

export function multiple_certs_gorouter(): ReactNode {
  return "To configure multiple HTTPS certificates for Cloud Foundry, specify those certificate keypairs in the `router.tls_pem` property.";
}

export function uaa_admin_client_creds(): ReactNode {
  return "Record the **uaa:admin:client_secret** from your deployment manifest.";
}

export function tcp_emitter_oauth_creds(): ReactNode {
  return "Obtain the secret for your `tcp_emitter` OAuth client from your manifest.";
}

export function tcp_app_domain(): ReactNode {
  return "tcp-domain.example.com";
}

export function routing_version(): ReactNode {
  return "routing-release 0.166.0";
}

export function gorouter_metrics_link(): ReactNode {
  return "../running/all_metrics.html#routing";
}

export function internal_domain_config(): ReactNode {
  return '::: info Admins can create internal domains. For more information, see the <a href="https://github.com/cloudfoundry/cf-networking-release/blob/develop/docs/05-service-discovery.md#internal-domains">Internal Domains</a> section in the `cf-networking-release` repository on GitHub.:::';
}

export function r_buildpack(): ReactNode {
  return '<tr><td><a href="./r/index.html" class="subnav">R</a></td><td><p>R</p></td><td><a href="https://github.com/cloudfoundry/r-buildpack">R source</a></td></tr>';
}

export function gorouter_client_cert(): ReactNode {
  return "gorouter_client_cert_oss";
}

export function ssl_termin_gorouter(): ReactNode {
  return "ssl_termin_gorouter_oss";
}

export function ssl_termin_lb_only(): ReactNode {
  return "ssl_termin_lb_only_oss";
}

export function ssl_termin_gorouter_lb(): ReactNode {
  return "ssl_termin_gorouter_lb_oss";
}

export function grootfs_reserved_space(): ReactNode {
  return "Alternatively, you can set the GrootFS `reserved_space_for_other_jobs_in_mb` property to a higher value.";
}

export function grootfs_disk_usage_link(): ReactNode {
  return "For more information about how to calculate GrootFS disk usage in your deployment, see [Examining GrootFS Disk Usage](../adminguide/examining_grootfs_disk.html).";
}

export function zdt_enable(): ReactNode {
  return "Use capi-release v0.168.0 or later and deploy the [cc\_deployment\_updater](https://github.com/cloudfoundry/cf-deployment/blob/master/operations/experimental/add-deployment-updater.yml). For this ops file, there are also [external-db](https://github.com/cloudfoundry/cf-deployment/blob/master/operations/experimental/add-deployment-updater-external-db.yml) and [postgres](https://github.com/cloudfoundry/cf-deployment/blob/master/operations/experimental/add-deployment-updater-postgres.yml) variants.";
}

export function get_auditor_binary(): ReactNode {
  return "Download the Stack Auditor binary for your OS from [Releases](https://github.com/cloudfoundry/stack-auditor/releases) in the Stack Auditor repository on GitHub.";
}

export function droplet_config(): ReactNode {
  return "`system_blobstore_ccdroplet_max_staged_droplets_stored` property in the Cloud Foundry manifest.";
}

export function blobstore_link(): ReactNode {
  return '<a href="../deploying/common/cc-blobstore-config.html">Cloud Controller Blobstore Configuration</a>';
}

export function capi_sidecar_req(): ReactNode {
  return "::: info This feature requires that your Cloud Foundry deployment uses capi-release 1.790 or later.:::";
}

export function enable_docker_link(): ReactNode {
  return "To enable Docker support, see the [Enable Docker](../../adminguide/docker.html#enable) section of the _Using Docker in Cloud Foundry_ topic.";
}

export function nozzle_info_link(): ReactNode {
  return "see [Scaling Nozzles](log-ops-guide.html#scaling-nozzles) in _Loggregator Guide for CF Operators_.";
}

export function slow_nozzle_alerts_link(): ReactNode {
  return "For more information, see the [Slow Nozzle Alerts](../../loggregator/log-ops-guide.html#slow-noz) section of the _Loggregator Guide for Cloud Foundry Operators_ topic.";
}

export function scaling_nozzles_link(): ReactNode {
  return "For more information, see the [Scaling Nozzles](../../loggregator/log-ops-guide.html#scaling-nozzles) section of the _Loggregator Guide for Cloud Foundry Operators_ topic.";
}

export function scaling_loggregator_link(): ReactNode {
  return "For more information, see [Scaling Loggregator](../../loggregator/log-ops-guide.html#scaling) in _Loggregator Guide for Cloud Foundry Operators_.";
}

export function using_docker_link(): ReactNode {
  return "For an explanation of how Docker works in Cloud Foundry, see [Using Docker in Cloud Foundry](../../adminguide/docker.html).";
}

export function cfdev_link(): ReactNode {
  return 'To deploy a local Cloud Foundry environment for experimentation or debugging purposes, you can use CF Dev. For more information, see <a href="https://github.com/cloudfoundry-incubator/cfdev">CF Dev</a>.';
}

export function zipkin_tracing_link(): ReactNode {
  return "For more information about Zipkin tracing, see [Enabling Zipkin Tracing](../adminguide/zipkin_tracing.html).";
}

export function network_policy_quota(): ReactNode {
  return "The maximum number of policies that a Space Developer can add in a space is set by the `max_policies_per_app_source` property in the `policy-server` job in the Cloud Foundry deployment manifest. By default, the maximum is 150.";
}

export function network_policy_quota_config(): ReactNode {
  return "To change the network policy quota for Space Developers, the Cloud Foundry operator must configure the `max_policies_per_app_source` property, then re-deploy Cloud Foundry.";
}

export function human_readable_timestamp(): ReactNode {
  return <></>;
}

export function find_metric_name_source_id(): ReactNode {
  return "see [CF Component Metrics](../running/all_metrics.html) and [UAA Performance Metrics](../uaa/uaa-metrics.html)";
}