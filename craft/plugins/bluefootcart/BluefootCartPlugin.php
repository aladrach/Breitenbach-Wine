<?php
namespace Craft;

class BluefootCartPlugin extends BasePlugin
{

	function getName()
	{
		return Craft::t('Bluefoot Cart');
	}

	function getVersion()
	{
		return '0.3';
	}

	function getDeveloper()
	{
		return 'Bluefoot';
	}

	function getDeveloperUrl()
	{
		return 'http://bluefoot.com';
	}

	function hasCpSection()
    {
        return true;
    }
    
    public function registerCpRoutes()
    {
        return array(

    	//user this area for custom CP routes

        );

	}	

    // Thanks Page - Feel free to remove.
    public function onAfterInstall()
    {
        craft()->request->redirect(UrlHelper::getCpUrl('/bluefootcart/thanks/'));
    }

}
