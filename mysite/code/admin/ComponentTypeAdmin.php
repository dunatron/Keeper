<?php
namespace MyOrg\Controller;
use MyOrg\Model\ComponentType;
use SilverStripe\Admin\ModelAdmin;

class ComponentTypeAdmin extends ModelAdmin
{
    private static $managed_models = [
        ComponentType::class,
    ];
    private static $url_segment = 'compoenttypes';
    private static $menu_title = 'Components';
}