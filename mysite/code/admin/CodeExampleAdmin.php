<?php
namespace MyOrg\Controller;
use MyOrg\Model\CodeExample;
use SilverStripe\Admin\ModelAdmin;

class CodeExampleAdmin extends ModelAdmin
{
    private static $managed_models = [
        CodeExample::class,
    ];
    private static $url_segment = 'codeexampleapp';
    private static $menu_title = 'Code Examples';
}