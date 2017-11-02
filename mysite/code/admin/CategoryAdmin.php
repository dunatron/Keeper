<?php
namespace MyOrg\Controller;
use MyOrg\Model\Category;
use SilverStripe\Admin\ModelAdmin;

class CategoryAppAdmin extends ModelAdmin
{
    private static $managed_models = [
        Category::class,
    ];
    private static $url_segment = 'categoryapp';
    private static $menu_title = 'Categories';
}