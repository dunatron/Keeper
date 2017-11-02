<?php

use SilverStripe\CMS\Controllers\ContentController;
use SilverStripe\View\Requirements;
use SilverStripe\View\ThemeResourceLoader;

class ReactPageController extends PageController
{
    /**
     * An array of actions that can be accessed via a request. Each array element should be an action name, and the
     * permissions or conditions required to allow the user to access it.
     *
     * <code>
     * array (
     *     'action', // anyone can access this action
     *     'action' => true, // same as above
     *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
     *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
     * );
     * </code>
     *
     * @var array
     */
    private static $allowed_actions = array(
    );
    protected function init()
    {
        parent::init();
        // You can include any CSS or JS required by your project here.
        // See: https://docs.silverstripe.org/en/developer_guides/templates/requirements/
    }
    public function doInit()
    {
        //parent::init();
        parent::doInit();
        Requirements::clear();
        $themeFolder = $this->ThemeDir();
        Requirements::set_write_js_to_body(true);
        Requirements::set_force_js_to_bottom(true);
        Requirements::javascript($themeFolder . '/dist/app.bundle.js');
    }
    public function ThemeDir()
    {
        return ThemeResourceLoader::inst()->getPath('react-app');
    }
}
