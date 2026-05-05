using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Media;
using Resonance.Models;
using Resonance.Services;
using Resonance.Views;

namespace Resonance;

public sealed partial class MainWindow : Window
{
    public PlaybackService Playback => AppShell.Playback;

    public MainWindow()
    {
        InitializeComponent();
        SystemBackdrop = new MicaBackdrop();
        ExtendsContentIntoTitleBar = true;
        SetTitleBar(AppTitleBar);
        Title = "Resonance";
        AppWindow.Resize(new(1400, 920));
        ContentFrame.Navigate(typeof(NowPlayingPage));
    }

    private void Sidebar_NavRequested(object? sender, string tag)
    {
        switch (tag)
        {
            case "now":      ContentFrame.Navigate(typeof(NowPlayingPage)); break;
            case "library":  ContentFrame.Navigate(typeof(LibraryPage));    break;
            case "settings": ContentFrame.Navigate(typeof(SettingsPage));   break;
            default:         ContentFrame.Navigate(typeof(PlaceholderPage), tag); break;
        }
    }

    private void MiniPlay_Click(object sender, RoutedEventArgs e) => Playback.TogglePlay();
    private void MiniNext_Click(object sender, RoutedEventArgs e) => Playback.Next();
    private void MiniPrev_Click(object sender, RoutedEventArgs e) => Playback.Previous();
    private void MiniShuffle_Click(object sender, RoutedEventArgs e) => Playback.Shuffle = !Playback.Shuffle;
    private void MiniRepeat_Click(object sender, RoutedEventArgs e)
    {
        Playback.Repeat = Playback.Repeat switch
        {
            RepeatMode.Off => RepeatMode.All,
            RepeatMode.All => RepeatMode.One,
            _              => RepeatMode.Off
        };
    }
}
